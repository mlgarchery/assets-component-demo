import { off } from "process";

export interface ArcProps {
    percentage: number;
    offset: number;
    color: string;
    strokeWidth: number;
}

export function Arc({percentage, offset, color, strokeWidth}: ArcProps) {
    return (
        <circle
            cx="50%" 
            cy="50%" 
            r="15.915494309189533" // 2*pi*r = 100, so we can manipulate units as %
            fill="transparent"
            stroke={color}
            strokeWidth={strokeWidth} 
            strokeDasharray={`${percentage} ${100-percentage}`} // the gap (empty) is the rest of the path length
            strokeDashoffset={-offset + 25}  // 25 base offset so that the Arc starts from the top (clockwise)
        />
    )
}
