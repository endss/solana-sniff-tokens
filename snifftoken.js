import fetch from 'node-fetch';
import { formatDateBrazil, formatMoney, sumAmounts } from './utils.js';

export async function sniff_token(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();

        const filteredToken = {
            "createdAt" : formatDateBrazil(data.tokenData.createdAt), 
            "tokenName": data.tokenData.tokenName,
            "tokenSymbol": data.tokenData.tokenSymbol,
            "marketCap" : formatMoney(data.tokenData.marketCap),
            "liquidity": formatMoney(sumAmounts(data.tokenData.liquidityList)),
            "pageViews": data.tokenData.pageViews, 
            "scorePoint": data.tokenData.score,
            "address": data.tokenData.tokenOverview.address
        };


        console.log(filteredToken);
    } catch (error) {
        console.error('Error fetching tokens:', error.message);
    }
}

const token_address = process.argv.slice(2);
const url = 'https://solsniffer.com/api/v1/sniffer/token/'+token_address;
sniff_token(url);

