const CDN_BASE_URL = "https://cdn.morpho.xyz";

const getLogoSvgUrl = (symbol?: string) =>
  new URL(
    `/assets/logos/${symbol?.toLowerCase() || "unknown"}.svg`,
    CDN_BASE_URL
  ).toString();

interface TokenIconProps {
  size: number;
  symbol: string;
}

export default function TokenIcon({size, symbol}: TokenIconProps) {
  return (
     <svg width={size} height={size}>       
          <image xlinkHref={getLogoSvgUrl(symbol)} width="30" height="30"/>    
     </svg>
  )
}
