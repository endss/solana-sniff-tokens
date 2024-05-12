import fetch from 'node-fetch';
import { formatDateBrazil, formatMoney, sumAmounts } from '../utils/adapters.js';

export async function sniff_token_resolver(url, tokenScore) {
    try {
        const page = process.argv.slice(2);
        const response = await fetch(url);
        const data = await response.json();

        const filteredTokens = data.tokenData
            .filter(token => token.score >= tokenScore)
            .sort(obj => new Date(obj.createdAt))
            .map(obj => (
                {
                "createdAt" : formatDateBrazil(obj.createdAt), 
                "tokenName": obj.tokenName,
                "tokenSymbol": obj.tokenSymbol,
                "marketCap" : formatMoney(obj.marketCap),
                "liquidity": formatMoney(sumAmounts(obj.liquidityList)),
                "pageViews": obj.pageViews, 
                "scorePoint": obj.score,
                "address": obj.tokenOverview.address}
            ));


        console.log(filteredTokens);
        console.log(filteredTokens.length)
    } catch (error) {
        console.error('Error fetching tokens:', error.message);
    }
}
