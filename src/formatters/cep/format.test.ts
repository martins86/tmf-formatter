// => nodemon --watch \"src//\" --exec \"ts-node src/formatters/cep/format.test.ts\" -e ts
import * as formatter from './format';

console.log('-Valid = 13101-058 => Number: ', formatter.cep(13101058));
console.log('-Valid = "13101-058" => String: ', formatter.cep('13101058'));

console.log('-Invalid = 13101-0581 => Number: ', formatter.cep(131010581));
console.log('-Invalid = "13101-0581" => String: ', formatter.cep('131010581'));