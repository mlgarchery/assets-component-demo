import { 
    Table, 
    TableHead, 
    TableBody, 
    TableRow, 
    TableCell,
    Typography,
} from '@mui/material'
import Market from './interface/market'
import { capitalize } from '../utils/strings'
import TokenIcon from './token-icon';

interface AssetsListProps {
    pool: string;
    markets: Array<Market>;
}

export default function PoolAssetsList({pool, markets}: AssetsListProps){
    const headersLabel = ["Asset", "Borrow", `${capitalize(pool)} APY`, "Your APY"];
    const marketValues = markets.map(m => [m.symbol, m.borrow, m.poolAPY, m.userAPY]);

    return (
        <Table sx={{ border: 'solid 1px;', }}>
        <TableHead>
            <TableRow>
                {headersLabel.map((header: string, i) => 
                <TableCell key={i}>
                    <Typography variant='h6'>{header}</Typography>
                </TableCell> 
                )}
            </TableRow>
        </TableHead>
        <TableBody>
            {marketValues.map(
                (market, i) => 
                    <TableRow key={i}>{
                        market.map((v, j) => <TableCell key={j}>{j===0 ? <TokenIcon symbol={v}></TokenIcon>: ''}{v}</TableCell>)}
                    </TableRow>
            )}
        </TableBody>
    </Table>
    )
}
