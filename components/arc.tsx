export interface ArcProps {
    center: number;
    percentage: number;
    offset: number;
    strokeColor: string;
}

export default function Arc({center, percentage, offset, strokeColor}: ArcProps) {
    return (
        <circle
            cx={center} 
            cy={center} 
            r="15.915494309189533" // 2*pi*r = 100, so we can manipulate units as %
            fill="transparent"
            stroke={strokeColor}
            strokeWidth={2.5} 
            strokeLinecap="round" 
            strokeDasharray={`${percentage} ${100-percentage}`} // the gap is the rest of the path length
            strokeDashoffset={-offset + 25}  // 25 base offset so that the Arc starts from the top (clockwise)
        >
        </circle>
    )
} 
