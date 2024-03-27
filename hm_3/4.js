"use strict";

/*
Необходимо реализовать четыре функции, каждая функция должна принимать по два
числа и выполнять одну из операций (каждая функция выполняет одну из них):
1. Сложение
2. Разность
3. Умножение
4. Деление
Необходимо сделать так, чтобы функция вернула число, например выражение
console.log(sum(2, 6)); должно вывести число 8 в консоль (sum - функция
сложения в данном примере, ваши названия функций могут отличаться).
Округлять значения, которые возвращают функции не нужно, однако, обратите
внимание на разность, функция должна вычесть из большего числа меньшее, либо
вернуть 0, если числа равны.
Функциям всегда передаются корректные числа, проверки на NaN, Infinity делать
не нужно.
Демонстрировать работы функций не обязательно.
*/

function addition(num_1, num_2) {
  let result = num_1 + num_2;
  return result.toFixed(2);
}

function difference(num_1, num_2) {
  let result = Math.max(num_1, num_2) - Math.min(num_1, num_2);
  return result.toFixed(2);
}

function multiplication(num_1, num_2) {
  let result = num_1 * num_2;
  return result.toFixed(2);
}

function division_max_for_min(num_1, num_2) {
  let result = Math.max(num_1, num_2) / Math.min(num_1, num_2);
  return result.toFixed(2);
}

function division_min_for_max(num_1, num_2) {
  let result = Math.min(num_1, num_2) / Math.max(num_1, num_2);
  return result.toFixed(2);
}

const num_1 = +prompt("Введите певое число: ");
const num_2 = +prompt("Введите второе число: ");
alert(
  `Результат операций над введенными числами ${num_1} и ${num_2}: 
  сумма: ${addition(num_1, num_2)}, 
  разность: ${difference(num_1, num_2)}, 
  умножение: ${multiplication(num_1, num_2)}, 
  деление максимального на минимальное: ${division_max_for_min(num_1, num_2)}
  деление минимального на максимальное: ${division_min_for_max(num_1, num_2)}`
);
