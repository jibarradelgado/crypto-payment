import getTickerWithParams from "./getCGHistory.js";

const data = async (currency, days, interval) => {
  const res = await getTickerWithParams(currency,days,interval);
  let data = [...res.prices];
  let result = [];
  for (let i=0; i < res.total_volumes.length; i++) {
    data[i].push(res.total_volumes[i][1]);
  }

  for (let i=0; i < data.length; i++) {
    result.push({
      time: new Date(data[i][0]).toLocaleString(),
      price: data[i][1],
      volume: data[i][2]
    });
  }
  return result;
};

export default data;