import { useTheme } from '@emotion/react';
import { SvgIcon, TextField} from '@mui/material';
import { Box } from '@mui/system';
import styles from '../styles/progress-bar.module.scss'


interface ProgressBarProps {
    percentage: number;
}


export default function ProgressBar({percentage}: ProgressBarProps){

    const theme = useTheme();
    const palette = theme.palette;
    const textHeight = 5;
    const spacing = 2;
    const barHeight = 3;
    const cursorSize = 1;
    const percentageDisplay = percentage.toFixed(2);
    return (
        <Box>
            <svg viewBox={`0 0 100 ${textHeight + spacing +barHeight}`} width='100%'>
                <defs>
                    <linearGradient id="myGradient">
                        <stop offset="60%"  stopColor={palette.primary.dark} />
                        <stop offset="95%" stopColor={palette.error.main} />
                    </linearGradient>
                </defs>
                <rect x="0" y={textHeight+spacing} width={100} height={barHeight} fill="url('#myGradient')" rx={2}/>
                <rect x={percentage} y={textHeight+spacing} width={cursorSize} height={barHeight} fill={palette.text.primary} />
                <text 
                    x={percentage}
                    y={textHeight}
                    fill={palette.text.primary} 
                    fontSize='5px' 
                    fontFamily='DM Sans Regular'
                    textLength={10} dx={-6}
                >
                    {percentageDisplay}
                </text>
            </svg>
        </Box>
    )
}
