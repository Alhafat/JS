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

function my_func(number) {
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
${my_func(0)}
${my_func(2)}
${my_func(3)}
${my_func(11)}
${my_func(14)}
${my_func(50)}
${my_func(-2)}
${my_func(-3)}
`);
