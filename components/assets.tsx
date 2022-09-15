import Doughnut from './doughnut'
import ProgressBar from '../components/progress-bar'
import { 
    Table, 
    TableHead, 
    TableBody, 
    TableRow, 
    TableCell,
    Tooltip,
    SvgIcon
} from '@mui/material'

import {InfoOutlined} from "@mui/icons-material"

import styles from '../styles/assets.module.scss'
import { capitalize } from '../utils/strings';
import TokenIcon from './token-icon'


interface Market {
    symbol: string;
    borrow: string;
    poolAPY: string;
    isMatched: boolean;
    userAPY: string;
    morphoRewards: string;
}

interface AssetsProps {
    borrowCapacity: string;
    totalUSD: string;
    globalAPY: string;
    pool: string;
    markets: Array<Market>
    
}

// {
// 	borrowCapacity: "45.2077777777",
// 	totalUSD: "2808.69",
// 	globalAPY: "0.0258",
// 	pool: "compound",
// 	markets: [
// 		{
// 			symbol: "UNI",
// 			borrow: "166.09",
// 			poolAPY: "0.0679",
// 			isMatched: true,
// 			userAPY: "0.0238",
// 			morphoRewards: "591.20"
// 		},
// 		{
// 			symbol: "COMP",
// 			borrow: "33.14",
// 			poolAPY: "0.0444444",
// 			isMatched: true,
// 			userAPY: "0.0271",
// 			morphoRewards: "269.18"
// 		},
// 		{
// 			symbol: "FEI",
// 			borrow: "0.06",
// 			poolAPY: "0.3205",
// 			isMatched: true,
// 			userAPY: "27.37",
// 			morphoRewards: "0.12"
// 		}
// 	]
// }

export default function Assets({borrowCapacity, totalUSD, globalAPY, pool, markets}: AssetsProps){
    
    const headersLabel = ["Asset", "Borrow", `${capitalize(pool)} APY`, "Your APY"];
    const marketValues = markets.map(m => [m.symbol, m.borrow, m.poolAPY, m.userAPY]);
    
    return (
        <div className={styles.assets}>
            <div className={styles.upTitle} >
                <h2>{borrowCapacity ? "Borrow": "Supply"}</h2>
                <Tooltip title="Hey look at those assets you borrowed !">
                    <InfoOutlined />
                </Tooltip>
            </div>
            
            <Doughnut title="USD Value" inCircleTitle={totalUSD} inCircleSubTitle={globalAPY}/>

            <div className={styles.borrowCapacity}>
                <h4 className={styles.capacityTitle}>Borrow Capacity</h4>
                <Tooltip title="Keep your borrowings reasonable.">
                    <InfoOutlined />
                </Tooltip>
                <ProgressBar percentage={parseFloat(borrowCapacity)} />
            </div>
            
            <Table>
                <TableHead>
                    <TableRow>
                        {headersLabel.map((header: string, i) => <TableCell key={i}>{header}</TableCell> )}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {marketValues.map(
                        (market, i) => 
                            <TableRow key={i}>{
                                market.map((v, j) => <TableCell key={j}>{j===0 ? <TokenIcon  symbol={v}></TokenIcon>: ''}{v}</TableCell>)}
                            </TableRow>
                    )}
                </TableBody>
            </Table>
        </div>
    )
}
