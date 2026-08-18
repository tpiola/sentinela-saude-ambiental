export type ConversionProperties = Record<
  string,
  string | number | boolean | undefined
>;

export type ConversionEventDetail = ConversionProperties & {
  name: string;
};

export function emitConversion(
  name: string,
  properties: ConversionProperties = {},
) {
  if (typeof window === "undefined") return;

  window.dispatchEvent(
    new CustomEvent<ConversionEventDetail>("sentinela:conversion", {
      detail: { name, ...properties },
    }),
  );
}
