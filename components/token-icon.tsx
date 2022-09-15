const CDN_BASE_URL = "https://cdn.morpho.xyz";
const getLogoSvgUrl = (symbol?: string) =>
  new URL(
    `/assets/logos/${symbol?.toLowerCase() || "unknown"}.svg`,
    CDN_BASE_URL
  ).toString();

interface TokenIconProps {
     symbol: string;
}

export default function TokenIcon({symbol}: TokenIconProps) {
  return (
     <svg width="90" height="90">       
          <image xlinkHref={getLogoSvgUrl(symbol)} width="30" height="30"/>    
     </svg>
  )
}
