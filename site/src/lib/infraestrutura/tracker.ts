export type DeviceType = "mobile" | "tablet" | "desktop";

export interface PageViewRecord {
  id: string;
  path: string;
  timestamp: number;
  device: DeviceType;
  referrer: string;
}

const STORAGE_KEY = "sentinela_pageviews";
const MAX_RECORDS = 5000;

export function detectDevice(userAgent?: string): DeviceType {
  const ua = (
    userAgent ??
    (typeof navigator !== "undefined" ? navigator.userAgent : "")
  ).toLowerCase();

  if (/ipad|tablet|kindle|silk|playbook/.test(ua)) return "tablet";
  if (/mobi|iphone|android|ipod|blackberry|opera mini|iemobile|windows phone/.test(ua)) {
    return "mobile";
  }
  return "desktop";
}

export function readPageViews(): PageViewRecord[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? (parsed as PageViewRecord[]) : [];
  } catch {
    return [];
  }
}

export function recordPageView(path: string): void {
  if (typeof window === "undefined") return;

  const record: PageViewRecord = {
    id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    path,
    timestamp: Date.now(),
    device: detectDevice(),
    referrer: document.referrer,
  };

  const next = [...readPageViews(), record].slice(-MAX_RECORDS);

  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  } catch {
    // Quota excedida — ignora silenciosamente (métrica não crítica).
  }
}

export function clearPageViews(): void {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.removeItem(STORAGE_KEY);
  } catch {
    // noop
  }
}

export interface AnalyticsSummary {
  total: number;
  today: number;
  mobile: number;
  tablet: number;
  desktop: number;
  uniquePaths: number;
  topPaths: { path: string; count: number }[];
  last7Days: { label: string; count: number }[];
}

function startOfDay(ts: number): number {
  const d = new Date(ts);
  d.setHours(0, 0, 0, 0);
  return d.getTime();
}

export function summarizePageViews(records: PageViewRecord[]): AnalyticsSummary {
  const now = new Date();
  const todayStart = startOfDay(Date.now());

  let mobile = 0;
  let tablet = 0;
  let desktop = 0;
  let today = 0;

  const pathCounts = new Map<string, number>();
  const dayCounts = new Map<string, number>();

  // Inicializa os últimos 7 dias (incluindo hoje) com zero.
  const dayLabels: string[] = [];
  for (let i = 6; i >= 0; i -= 1) {
    const d = new Date(now);
    d.setDate(now.getDate() - i);
    const key = startOfDay(d.getTime()).toString();
    const label = d.toLocaleDateString("pt-BR", { day: "2-digit", month: "2-digit" });
    dayLabels.push(label);
    dayCounts.set(key, 0);
  }

  for (const record of records) {
    if (record.device === "mobile") mobile += 1;
    else if (record.device === "tablet") tablet += 1;
    else desktop += 1;

    if (record.timestamp >= todayStart) today += 1;

    pathCounts.set(record.path, (pathCounts.get(record.path) ?? 0) + 1);

    const dayKey = startOfDay(record.timestamp).toString();
    if (dayCounts.has(dayKey)) dayCounts.set(dayKey, (dayCounts.get(dayKey) ?? 0) + 1);
  }

  const topPaths = [...pathCounts.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, 8)
    .map(([path, count]) => ({ path, count }));

  const last7Days = dayLabels.map((label) => {
    const d = new Date(now);
    const idx = dayLabels.indexOf(label);
    d.setDate(now.getDate() - (6 - idx));
    const key = startOfDay(d.getTime()).toString();
    return { label, count: dayCounts.get(key) ?? 0 };
  });

  return {
    total: records.length,
    today,
    mobile,
    tablet,
    desktop,
    uniquePaths: pathCounts.size,
    topPaths,
    last7Days,
  };
}
