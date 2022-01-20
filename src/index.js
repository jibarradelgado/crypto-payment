import fetch from 'node-fetch';

const getTicker = async () => {
  await fetch(`https://api.bitso.com/v3/ticker?book=btc_mxn`)
    .then(response => response.json())
    .then(data => console.log(data));
}

setInterval(() => {
  getTicker();
}, 2000);