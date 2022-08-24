export function currencyFormat(amount, decimals, symbol){
    const decimalsAmount = insertDecimal(amount, decimals)
    return `${symbol} ${decimalsAmount}`
}

function insertDecimal(num, decimals) {
    return (num / 100).toFixed(decimals);
 }