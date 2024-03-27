"use strict";

/*
Создать переменные positive и negative, в которые пользователь вводит с 
клавиатуры значения. Нужно попросить пользователя ввести положительное число в 
переменную positive и отрицательное в переменную negative. 
Перед тем, как положить значения в данные переменные необходимо их превратить 
в числа.
После ввода значений, необходимо вывести "Все значения верные.", если 
пользователь действительно ввел корректные значения, которые мы просили его 
ввести.
Если же пользователь где-то ввел неверное значение, то необходимо вывести 
в консоль "Одно или более значений некорректно.".
*/

let positive = Number(prompt("Введите положительное значение: "));
let negative = Number(prompt("Введите отрицательное значение: "));

while (positive <= 0 || negative >= 0) {
  if (positive <= 0) {
    alert("Введено неверное значение переменной positive!");
    positive = Number(prompt("Введите положительное значение: "));
  }
  if (negative >= 0) {
    alert("Введено неверное значение переменной negative!");
    negative = Number(prompt("Введите отрицательное значение: "));
  }
}
alert(
  `Все значения введены верно: positive = ${positive} negative = ${negative}`
);