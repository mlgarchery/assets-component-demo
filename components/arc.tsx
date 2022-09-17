export interface ArcProps {
    percentage: number;
    offset: number;
    color: string;
    strokeWidth: number;
}

export function Arc({percentage, offset, color, strokeWidth}: ArcProps) {
    // The ends of the stroke being rounded, it adds half the strokeWidth value at each ends
    // To space the srokes properly so they don't overlap we have to add an extra gap space of
    // value strokeWidth.
    // The added width from the rounded end also caps down the arc size to the strokeWidth.
	// https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke-linecap#round 
    const strokeDashWidth = percentage===strokeWidth ? 0.1 : percentage-strokeWidth;

    return (
        <circle
            cx="50%" 
            cy="50%" 
            r="15.915494309189533" // 2*pi*r = 100, so we can manipulate units as %
            fill="transparent"
            stroke={color}
            strokeWidth={strokeWidth} 
            strokeLinecap="round" 
            strokeDasharray={`${strokeDashWidth} ${100-strokeDashWidth}`} // the gap (empty) is the rest of the path length
            strokeDashoffset={-offset-strokeWidth/2 + 25}  // 25 base offset so that the Arc starts from the top (clockwise)
        />
    )
}
