import { useTheme, Theme, Box } from '@mui/material';


interface ProgressBarProps {
    percentage: number;
    gradientStart: string;
    gradientStop: string;
}

export default function ProgressBar({percentage, gradientStart, gradientStop}: ProgressBarProps){

    const theme: Theme = useTheme();
    const palette = theme.palette;
    const textHeight = 5;
    const spacing = 2;
    const barHeight = 3;
    const cursorSize = 1;
    const label = `${percentage.toFixed(2)}%`;

    return (
        <Box>
            <svg viewBox={`0 0 100 ${ 2*textHeight + spacing + barHeight}`} width='100%'>
                <defs>
                    <linearGradient id="myGradient">
                        <stop offset={gradientStart}  stopColor={palette.primary.light} />
                        <stop offset={gradientStop} stopColor={palette.error.main} stopOpacity={0.3} />
                    </linearGradient>
                </defs>

                <rect x="10%" y={textHeight+spacing} width={80} height={barHeight} fill="url('#myGradient')" rx={2}/>
                <rect x={percentage*0.8+20} y={textHeight+spacing} width={cursorSize} height={barHeight} fill={palette.text.primary} />
                <text 
                    x={percentage*0.8+20}
                    y={textHeight}
                    fill={palette.text.primary} 
                    fontSize='5px' 
                    fontFamily='DM Sans Regular'
                    dx={-label.length}
                >
                    {label}
                </text>
            </svg>
        </Box>
    )
}
