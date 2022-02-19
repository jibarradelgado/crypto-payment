import printData from "./utils/printData.js";
import data from "./utils/processData.js";

const main = async () => {
  const result = await data('mxn','90','hourly');
  printData(JSON.stringify(result));
}

main();