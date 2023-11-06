export enum OrderType {
    MARKET = 49,
    LIMIT,
    STOP,
    STOP_LIMIT,
    MARKET_ON_CLOSE,
    LIMIT_ON_CLOSE = 59,
    MARKET_IF_TOUCHED = 67,
    LIMIT_IF_TOUCHED,
    BLOCK_TRADE = 91
}

export default OrderType;