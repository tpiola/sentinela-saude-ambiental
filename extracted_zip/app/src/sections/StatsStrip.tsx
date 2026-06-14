import { Timer, FileCheck, BadgeCheck, MapPin, Award, Shield } from 'lucide-react';

const stats = [
  { icon: <Timer className="w-5 h-5" />, num: '< 10 min', lbl: 'tempo de resposta' },
  { icon: <FileCheck className="w-5 h-5" />, num: '100%', lbl: 'com certificado' },
  { icon: <BadgeCheck className="w-5 h-5" />, num: 'ANVISA', lbl: 'produtos registrados' },
  { icon: <MapPin className="w-5 h-5" />, num: '50 km', lbl: 'cobertura regional' },
  { icon: <Award className="w-5 h-5" />, num: '41 anos', lbl: 'protegendo Franca' },
  { icon: <Shield className="w-5 h-5" />, num: '8 serviços', lbl: 'controle completo' },
];

export default function StatsStrip() {
  return (
    <div className="bg-sentinel-ice border-y border-sentinel-mist py-5 overflow-hidden">
      <div className="flex items-center gap-10 animate-marquee whitespace-nowrap w-max hover:[animation-play-state:paused]">
        {[...stats, ...stats].map((stat, i) => (
          <div key={i} className="flex items-center gap-2.5 shrink-0">
            <span className="text-sentinel-sage">{stat.icon}</span>
            <span className="font-display text-[1.05rem] font-bold text-sentinel-forest">{stat.num}</span>
            <span className="text-[.72rem] text-sentinel-ink-4">{stat.lbl}</span>
            <div className="w-px h-6 bg-sentinel-mist ml-4" />
          </div>
        ))}
      </div>
    </div>
  );
}
