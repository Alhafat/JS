"use strict";

/*Реализовать функцию round5, которой передается целое число, функция должна 
возвращать ближайшее целое число к тому что было передано, без остатка делящееся 
на 5.
 
```js
function round5(val) {
 
}
 
console.log(round5(0)); // 0
console.log(round5(2)); // 0
console.log(round5(3)); // 5
console.log(round5(11)); // 10
console.log(round5(14)); // 15
console.log(round5(50)); // 50
console.log(round5(-2)); // 0
console.log(round5(-3)); // -5
```*/

function round5(number) {
  //   if (number % 5 == 0) {
  //     return number;
  //   }

  //   for (var i = number + 1; ; i++) {
  //     if (i % 5 == 0) {
  //       break;
  //     }
  //   }
  //   for (var index = number - 1; ; index--) {
  //     if (index % 5 == 0) {
  //       break;
  //     }
  //   }
  //   if (Math.min(i - number > number - index)) {
  //     return index;
  //   } else {
  //     return i;
  //   }
  return Math.round(number / 5) * 5;
}

alert(`
${round5(0)}
${round5(2)}
${round5(3)}
${round5(11)}
${round5(14)}
${round5(50)}
${round5(-2)}
${round5(-3)}
`);
