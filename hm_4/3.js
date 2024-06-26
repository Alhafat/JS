"use strict";

/*
Используя Math.random() необходимо сгенерировать массив, содержащий 5 цифр в 
диапазоне [0, 9].
После создания массива необходимо вывести в консоль следующие значения:
1. Сумму элементов массива
2. Минимальное значение в массиве
3. Новый массив, содержащий индексы сгенерированного выше массива, в которых 
значение равно 3.
Пример: Если у нас сгенерировался массив [2, 3, 5, 7, 3], то мы должны вывести 
в консоль массив [1, 4]. Такой массив получился потому что в сгенерированном
массиве тройки лежат под индексами 1 и 4. Если троек в сгенерированном массиве
не окажется, значит нужно будет вывести пустой массив.
*/

function get_arr() {
  let arr = [];
  for (let i = 0; i < 5; i++) {
    arr.push(Math.round(Math.random(0, 9) * 9));
  }

  return arr;
}

const result_arr = get_arr();

function new_array(result_arr) {
  let new_arr = [];
  for (let index = 0; index < result_arr.length; index++) {
    if (result_arr[index] == 3) {
      new_arr.push(index);
    }
  }
  if (new_arr.length) {
    return `${new_arr} - новый массив, содержащий индексы сгенерированного выше массива, в которых значение равно 3`;
  } else {
    return `Сгенерированный выше массив не содержит значения равные 3`;
  }
}

console.log(`${result_arr} - полученный массив`);
console.log(
  `${result_arr.reduce((a, b) => a + b, 0)} - сумма элементов массива`
);
console.log(
  `${Math.min.apply(Math, result_arr)} - минимальное значение в массиве`
);
console.log(new_array(result_arr));
