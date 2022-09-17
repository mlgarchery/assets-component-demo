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

function getSortedDisplayblableDivs(divisions: Array<DoughnutDivision>, minPercentage: number){
	let divs: Array<DoughnutDivision> = []
	const sortedDivisions= divisions.sort((d1, d2) => d2.percentage - d1.percentage)
	for(let i=0; i<sortedDivisions.length; i++){
		divs.push(sortedDivisions[i])
		// we keep the last 'little' division and not the others
		// in order to not bloat our doughnut with little dots
		if(sortedDivisions[i].percentage <= minPercentage){
			divs[divs.length-1].percentage = minPercentage;
			break;
		}
	}
	return divs
}

export default function Doughnut({title, inCircleTitle, inCircleSubTitle, divisions}: DoughnutProps){

	const viewBoxSize = 40;
	const theme = useTheme();
	const palette: Palette = theme.palette;

	let offset = 0;
	const strokeWidth = 2.4; // thickness of an arc, but also its minimum length !
	const arcSpacing = 1;

	const divs = getSortedDisplayblableDivs(divisions, strokeWidth);
	const extraLength = divs.reduce<number>((acc, d) => acc + d.percentage, 0) - 100;
	const extraLength = divs[divs.length -1].percentage ==strokeWidth ?
	console.log(extraLength);
	const ratio = (100 - divs.length * arcSpacing - extraLength ) / 100;

	let arcs = divs.map<ArcProps>(
		(d) => {
			if(d.color === "")
			console.log("start offset", offset, "percentage", d.percentage);
			let arc =  {
				color: d.color,
				percentage: d.percentage === strokeWidth ? strokeWidth : d.percentage * ratio,
				offset,
				strokeWidth
			};
			offset += d.percentage * ratio + arcSpacing;
			console.log("end offset", offset);
			return arc;
		}
	);

    return (
		<Stack maxWidth={300}>
			<Stack direction="row" justifyContent="center" alignItems="center" spacing={1}>
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
