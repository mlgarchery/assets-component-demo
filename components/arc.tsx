export interface ArcProps {
    center: number;
    percentage: number;
    offset: number;
    strokeColor: string;
}

export default function Arc({center, percentage, offset, strokeColor}: ArcProps) {
    const strokeDasharray = `${percentage} ${100-percentage}`;
    const strokeDashoffset = -offset + 25; // 25 base offset so that the Arc start from the top
    return (
        <circle
            cx={center} 
            cy={center} 
            // 2*pi*r = 100, so we can manipulate units as %
            r="15.91549430918954"
            fill="transparent" 
            stroke={strokeColor}
            strokeWidth={2} 
            strokeLinecap="round" 
            strokeDasharray={strokeDasharray}
            strokeDashoffset={strokeDashoffset}
        >
        </circle>
    )
} 
