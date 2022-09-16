import Doughnut from './doughnut'
import ProgressBar from './progress-bar'
import { 
    Tooltip,
    Stack,
    Typography,
} from '@mui/material'

import {InfoOutlined} from "@mui/icons-material"

import styles from '../styles/assets.module.scss'
import { toPercentage } from '../utils/strings';
import Market from './interface/market'
import AssetsList from './assets-list'


interface AssetsProps {
    borrowCapacity: string;
    totalUSD: string;
    globalAPY: string;
    pool: string;
    markets: Array<Market>
    
}

export default function Assets({borrowCapacity, totalUSD, globalAPY, pool, markets}: AssetsProps){
    return (
        <Stack 
            maxWidth={500} borderRadius={4} padding={2}
            bgcolor="primary.main" color="text.primary"
        >

            <Stack direction="row" justifyContent={'space-between'}>
                <Typography variant='h1' >
                    {borrowCapacity ? "Borrow": "Supply"}
                    </Typography>
                <Tooltip title="Hey look at those assets you borrowed !">
                    <InfoOutlined />
                </Tooltip>
            </Stack>
            
            <Stack direction="row" justifyContent="center">
                <Doughnut 
                    title="USD Value" 
                    inCircleTitle={`$${totalUSD}`} 
                    inCircleSubTitle={`APY: ${toPercentage(globalAPY)}%`}
                />
            </Stack>
            
            <Stack className={styles.borrowCapacity}>
                <Typography variant="h3">Borrow Capacity</Typography>
                <Tooltip title="Keep your borrowings reasonable.">
                    <InfoOutlined />
                </Tooltip>
                <ProgressBar percentage={parseFloat(borrowCapacity)} />
            </Stack>

            <AssetsList pool={pool} markets={markets} />

        </Stack>
    )
}
