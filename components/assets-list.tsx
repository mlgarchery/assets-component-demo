import { 
    Table, 
    TableHead, 
    TableBody, 
    TableRow, 
    TableCell,
    Typography,
    TableContainer
} from '@mui/material'
import { Market } from './interfaces/data'
import { capitalize, toPercentage } from '../utils/strings'
import TokenIcon from './token-icon';
import { Stack } from '@mui/system';

interface AssetsListProps {
    pool: string;
    markets: Array<Market>;
}

export default function PoolAssetsList({pool, markets}: AssetsListProps){
    const headersLabel = ["Asset", "Borrow", `${capitalize(pool)} APY`, "Your APY"];
    
    return (
        <TableContainer sx={{border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: 4}}>
            <Table sx={{ borderBlockColor: 'black'}}>
                <TableHead>
                    <TableRow sx={{ bgcolor: 'primary.light'}}>
                        {headersLabel.map((header: string, i) => 
                        <TableCell key={i}>
                            <Typography variant='h6'>{header}</Typography>
                        </TableCell> 
                        )}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {markets.map((market, i) => 
                    <TableRow key={i} sx={{bgcolor: i%2==0 ? "primary.main": "primary.light"}}>
                        <TableCell align="left" sx={{padding: 2}}>
                            <Stack direction="row" alignItems="top" spacing={1}>
                                <TokenIcon symbol={market.symbol} size={30}></TokenIcon>
                                <Typography padding={0.5}>{market.symbol}</Typography>
                            </Stack>
                        </TableCell>
                        <TableCell align="left">{market.borrow}</TableCell>
                        <TableCell align="left">{`${toPercentage(market.poolAPY)}%`}</TableCell>
                        <TableCell align="left">{`${toPercentage(market.userAPY)}%`}</TableCell>
                    </TableRow>
                    )}
                </TableBody>
            </Table>
        </TableContainer>
    )
}
