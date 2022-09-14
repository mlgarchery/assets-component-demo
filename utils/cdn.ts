const CDN_BASE_URL = "https://cdn.morpho.xyz";
const getLogoSvgUrl = (symbol?: string) =>
  new URL(
    `/assets/logos/${symbol?.toLowerCase() || "unknown"}.svg`,
    CDN_BASE_URL
  ).toString();

export default getLogoSvgUrl;
