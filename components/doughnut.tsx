import { Arc, ArcProps } from './arc'
import { VisibilityOff } from '@mui/icons-material'
import { Stack } from '@mui/system'
import { useTheme, Palette } from '@mui/material'
import { Typography } from '@mui/material'


interface DoughnutDivision {
	percentage: number;
	color: string;
}

interface DoughnutProps {
	title: string;
	inCircleTitle: string;
	inCircleSubTitle: string;
	divisions: Array<DoughnutDivision>;
}

export default function Doughnut({title, inCircleTitle, inCircleSubTitle, divisions}: DoughnutProps){

	
	const viewBoxSize = 40;
	const theme = useTheme();
	const palette: Palette = theme.palette;

	let offset = 0;
	const strokeWidth = 2.4;

	let arcs = divisions
		.sort((d1, d2) => d2.percentage - d1.percentage)
		.map<ArcProps>(
			(d) => {
				let arc =  { ...d, offset, strokeWidth};
				offset += d.percentage;
				return arc;
			}
		);

    return (
		<Stack maxWidth={300}>
			<Stack direction="row" justifyContent="center" alignItems="center" spacing={1} color='grey.500'>
				<VisibilityOff />
				<Typography component="h3">{title}</Typography>
			</Stack>
			<svg width="100%" height="100%" viewBox={`0 0 ${viewBoxSize} ${viewBoxSize}`} >
				{arcs.map((arcProps, i)=> 
				<Arc {...arcProps} key={i} />
				)}
				<text 
					x="50%" 
					y="50%"
					textAnchor='middle'
					fill={palette.text.primary}
					fontSize={viewBoxSize/12}
					fontFamily="Prompt Regular"
				>
					{inCircleTitle}
				</text>
				<text 
					x="50%" 
					y="50%"
					textAnchor='middle'
					dy={viewBoxSize/15}
					fill={palette.grey[300]}
					fontSize={viewBoxSize/18} 
					fontFamily="Prompt Regular"
				>
					{inCircleSubTitle}
				</text>
			</svg>
		</Stack>
	)
}
