"use strict";

/*
Дан объект numbers. 
Необходимо в консоль вывести все значения объекта, которые больше или равны 3.
*/

const numbers = {
  key1: 12,
  key2: 2,
  key3: 4,
  key4: 1,
  key5: -244,
  key6: 0,
  key7: 7,
  key8: 3,
};

console.log(`Значения объекта, которые больше или равны 3:`);

// for (const key of Object.keys(numbers)) {
//   if (numbers[key] >= 3) {
//     console.log(numbers[key]);
//   }
// }

for (const [keys, values] of Object.entries(numbers)) {
  if (values >= 3) {
    console.log(keys + ":" + values);
  }
}
