// anotherFile.js
import { sniff_token_resolver } from '../resolvers/sniff-token-resolver.js';

const page = process.argv.slice(2);
const url = 'https://solsniffer.com/api/v1/sniffer/tokensByDT?page='+page;
const tokenScore = 87;

sniff_token_resolver(url, tokenScore);
