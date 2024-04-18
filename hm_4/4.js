"use strict";

/*
Необязательное задание. 
Необходимо вывести горку в консоль (используя цикл for), как показано на
рисунке, только у вашей горки должно быть 20 рядов, а не 5:

x
xx
xxx
xxxx
xxxxx
*/

let temp = "";

for (let index = 0; index < 20; index++) {
  temp += "x";
  console.log(`${temp}`);
}
