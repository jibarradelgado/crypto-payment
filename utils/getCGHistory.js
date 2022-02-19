import fetch from 'node-fetch';

const getTicker = async () => {
  const response = await fetch(`https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=mxn&days=5&interval=daily`)
    .then(response => response.json());
  return response;
};

const getTickerWithParams = async (currency, days, interval) => {
  const response = await fetch(`https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=${currency}&days=${days}&interval=${interval}`)
    .then(response => response.json())
    .catch(error => console.log(error));
  return response;
}

export default getTickerWithParams ;
export { getTicker };