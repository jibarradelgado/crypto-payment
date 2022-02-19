import path from 'path';
import {fileURLToPath} from 'url';
import * as fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const printData = (data) => {
  fs.writeFile('historicos.txt', data.toString(), 'utf8', (err) => {
    if (err) return console.log(err);
  });
}

export default printData;