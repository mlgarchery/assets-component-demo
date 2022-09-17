import Doughnut from './doughnut'
import ProgressBar from './progress-bar'
import { 
    Tooltip,
    Stack,
    Typography,
    Box
} from '@mui/material'

import {InfoOutlined, Add} from "@mui/icons-material"

import { toPercentage } from '../utils/strings';
import { AllAsset, Market } from './interfaces/data'
import { assets } from '../data/assets'

import AssetsList from './assets-list'


interface AssetsOverviewProps {
    borrowCapacity: string;
    globalAPY: string;
    pool: string;
    markets: Array<Market>
}

export default function AssetsOverview({borrowCapacity, globalAPY, pool, markets}: AssetsOverviewProps){

    const totalValue= markets.reduce<number>((acc, m) => {
        const symbol = m.symbol as keyof AllAsset;
        return acc + parseFloat(m.borrow)*assets[symbol].dollarPrice;
    }, 0);
    
    const divisions = markets.map((m) => {
        const symbol = m.symbol as keyof AllAsset;
        const arc =  {
            color: assets[symbol].color,
            percentage: parseFloat(m.borrow)*assets[symbol].dollarPrice / totalValue * 100
        }
        return arc
    });

    return (
        <Stack 
            maxWidth={500} borderRadius={4} padding={2}
            bgcolor="primary.main" color="text.primary" border="1px solid rgba(255, 255, 255, 0.05)"
        >

            <Stack direction="row" justifyContent={'space-between'}>
                <Typography variant='h1' >
                    {borrowCapacity ? "Borrow": "Supply"}
                    </Typography>
                <Tooltip color='black' title="Hey look at those assets you borrowed !">
                    <InfoOutlined />
                </Tooltip>
            </Stack>
            
            <Stack direction="row" justifyContent="center">
                <Doughnut 
                    title="USD Value" 
                    inCircleTitle={`$${toPercentage(totalValue)}`} 
                    inCircleSubTitle={`APY: ${toPercentage(globalAPY)}%`}
                    divisions={divisions}
                />
            </Stack>

            <Stack direction="row" flexGrow={2} alignItems="center" spacing={1} >
                <Typography variant="h3">Borrow Capacity</Typography>
                <Tooltip title="Keep your borrowings reasonable.">
                    <InfoOutlined />
                </Tooltip>
                <ProgressBar percentage={100} gradientStart="55%" gradientStop="100%"/>
            </Stack>
            
            <AssetsList pool={pool} markets={markets} />

            <Stack direction="row" justifyContent="right" paddingTop={5} color="grey.600">
                <Typography>Borrow a new asset</Typography> 
                <Box >
                    <Add />
                </Box>
            </Stack>

        </Stack>
    )
}
