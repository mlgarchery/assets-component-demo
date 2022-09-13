const CDN_BASE_URL = "https://cdn.morpho.xyz";
export const getLogoSvgUrl = (symbol?: string) =>
  new URL(
    `/assets/logos/${symbol?.toLowerCase() || "unknown"}.svg`,
    CDN_BASE_URL
  ).toString();
