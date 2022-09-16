import Arc from './arc';
import { Palette, VisibilityOff } from '@mui/icons-material';
import { Box, Stack } from '@mui/system';
import { useTheme } from '@emotion/react';
import { Typography } from '@mui/material';

interface DoughnutProps {
	title: string;
	inCircleTitle: string;
	inCircleSubTitle: string;
}

export default function Doughnut({title, inCircleTitle, inCircleSubTitle}: DoughnutProps){
    const viewBoxSize = 40;
	const theme = useTheme();
	const palette = theme.palette;

    return (
		<Stack maxWidth={300}>
			<Stack direction="row" justifyContent="center" alignItems="center" spacing={1}>
				<VisibilityOff />
				<Typography component="h3">{title}</Typography>
			</Stack>
			<Box>
				<svg width="100%" height="100%" viewBox={`0 0 ${viewBoxSize} ${viewBoxSize}`} >
					{/* Put as many arc as in the input tables*/}
					<Arc center={viewBoxSize/2} strokeColor={'#42c2d3'} offset={0} percentage={30} />
					<Arc center={viewBoxSize/2} strokeColor={'#ce4b99'} offset={33} percentage={30} />
					<Arc center={viewBoxSize/2} strokeColor={'#6cc755'} offset={66} percentage={10} />
					<Arc center={viewBoxSize/2} strokeColor={'#6cc755'} offset={79} percentage={0} />
					<Arc center={viewBoxSize/2} strokeColor={'#5ba748'} offset={82} percentage={0} />
					<Arc center={viewBoxSize/2} strokeColor={'#549b42'} offset={85} percentage={0} />
					<Arc center={viewBoxSize/2} strokeColor={'#448035'} offset={88} percentage={0} />
					<Arc center={viewBoxSize/2} strokeColor={'#3b6e2f'} offset={91} percentage={0} />
					<Arc center={viewBoxSize/2} strokeColor={'#35632b'} offset={94} percentage={0} />
					<Arc center={viewBoxSize/2} strokeColor={'#274920'} offset={97} percentage={0} />
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
						fill={palette.text.primary}
						fontSize={viewBoxSize/15} 
						fontFamily="Prompt Regular"
					>
						{inCircleSubTitle}
					</text>
				</svg>
			</Box>
		</Stack>
	)
}
