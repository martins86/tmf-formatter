// => nodemon --watch \"src//\" --exec \"ts-node src/formatters/cpf/format.test.ts\" -e ts
import * as formatter from './format';

console.log('-Valid = 33568737841 => Number: ', formatter.cpf(33568737841));
console.log('-Valid = "33568737841" => String: ', formatter.cpf('33568737841'));

console.log('-Invalid = 335687378411 => Number: ', formatter.cpf(335687378411));
console.log('-Invalid = "335687378411" => String: ', formatter.cpf('335687378411'));