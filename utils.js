
export function formatMoney(marketCap) {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(marketCap);
}

export function sumAmounts(liquidityList) {
    if(!liquidityList) return 0;
    
    return liquidityList.reduce((total, item) => {
        // Get the first key in the object (the exchange name)
        const exchangeName = Object.keys(item)[0];

        // Check if the exchange object and the amount property exist
        if (item[exchangeName] && item[exchangeName].amount) {
            return total + item[exchangeName].amount;
        } else {
            return total;
        }
    }, 0);
}

export function formatDateBrazil(date) {
    return new Date(date).toLocaleString("pt-BR", {timeZone: "America/Sao_Paulo"})}