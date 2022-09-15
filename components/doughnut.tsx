import Arc from './arc';
import styles from '../styles/doughnut.module.scss'
import { VisibilityOff } from '@mui/icons-material';

interface DoughnutProps {
	title: string;
	inCircleTitle: string;
	inCircleSubTitle: string;
}

export default function Doughnut({title, inCircleTitle, inCircleSubTitle}: DoughnutProps){
    const viewBoxSize = 40;

    return (
		<div className={styles.doughnut}> 
		<h4 className={styles.title}><VisibilityOff /> {title} </h4>
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
			<text x={viewBoxSize/2} y={viewBoxSize/2} fontSize='5px' >{inCircleTitle}</text>
			<text x={viewBoxSize/2} y={viewBoxSize/2} fontSize='4px' dy={5}>{inCircleSubTitle}</text>
		</svg>
		</div>
	)
}
