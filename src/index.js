import fetch from 'node-fetch';

function getTicker() {
  fetch(`https://api.bitso.com/v3/ticker?book=btc_mxn`)
    .then(response => response.json())
    .then(data => console.log(data));
}

getTicker();