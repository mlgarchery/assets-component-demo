import styles from '../styles/progress-bar.module.scss'

interface ProgressBarProps {
    percentage: number;
}

export default function ProgressBar({percentage}: ProgressBarProps){
    const textHeight = 5;
    const spacing = 2;
    const barHeight = 3;
    const cursorSize = 1;
    const percentageDisplay = percentage.toFixed(2);
    return (
        <svg viewBox={`0 0 100 ${textHeight + spacing +barHeight}`} width='100%'>
            <defs>
                <linearGradient id="myGradient">
                    <stop offset="60%"  stopColor='var(--primary-600)' />
                    <stop offset="95%" stopColor='var(--alert-800)' />
                </linearGradient>
            </defs>
            <rect x="0" y={textHeight+spacing} width={100} height={barHeight} fill="url('#myGradient')" rx={2}/>
            <rect x={percentage} y={textHeight+spacing} width={cursorSize} height={barHeight} fill="white" />
            <text x={percentage} y={textHeight} fill='var(--primary-000)' fontSize='5px' textLength={10} dx={-6}>{percentageDisplay}</text>
        </svg>
    )
}
