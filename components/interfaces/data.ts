export interface Market {
    symbol: string;
    borrow: string;
    poolAPY: string;
    isMatched: boolean;
    userAPY: string;
    morphoRewards: string;
}

export interface Asset {
    symbol: string;
    color: string;
    dollarPrice: number;
}

export interface AllAsset {
    DAI: Asset;
    BAT: Asset,
    USDC: Asset,
    COMP: Asset,
    WMATIC: Asset,
    MATIC: Asset,
    WAVAX: Asset,
    AVAX: Asset,
    UNI: Asset,
    USDT: Asset,
    WBTC: Asset,
    AAVE: Asset,
    MORPHO: Asset,
    REP: Asset,
    WETH: Asset,
    FEI: Asset,
    CRV: Asset,
    stETH: Asset,
    BNB: Asset,
    BUSD: Asset,
    XRP: Asset,
    ADA: Asset,
    SOL: Asset,
    DOT: Asset,
    TRX: Asset,
    SHIB: Asset
}
