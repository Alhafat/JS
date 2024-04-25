"use strict";

/*
1. Найти по id, используя getElementById, элемент с id равным "super_link" и вывести этот элемент в консоль.
*/
console.log(
  `1. Найти по id, используя getElementById, элемент с id равным "super_link" и вывести этот элемент в консоль.`
);
const id = "super_link";
console.log(document.getElementById(id));
console.log(document.querySelector(`#${id}`));

/*
2. Внутри всех элементов на странице, которые имеют класс "card-link", поменяйте текст внутри элемента на "ссылка".
*/

console.log(
  `2. Внутри всех элементов на странице, которые имеют класс "card-link", поменяйте текст внутри элемента на "ссылка".`
);
const cardLinkList = document.querySelectorAll(".card-link");

cardLinkList.forEach((element) => {
  element.textContent = "ссылка";
  console.log(element);
});

// for (let index = 0; index < cardLinkList.length; index++) {
//   console.log(cardLink[index]);
// }

/*
3. Найти все элементы на странице с классом "card-link", которые лежат в элементе с классом "card-body" 
и вывести полученную коллекцию в консоль.
*/

console.log(
  `3. Найти все элементы на странице с классом "card-link", которые лежат в элементе с классом "card-body" и вывести полученную коллекцию в консоль.`
);
// const cardBodyLinkList = document
//   .querySelector(".card-body")
//   .querySelectorAll(".card-link");
const cardBodyLinkList = document.querySelectorAll(".card-body .card-link");
console.log(cardBodyLinkList);

/* 
4. Найти первый попавшийся элемент на странице у которого есть атрибут data-number со значением 50 и вывести его в консоль.
*/

console.log(
  `4. Найти первый попавшийся элемент на странице у которого есть атрибут data-number со значением 50 и вывести его в консоль.`
);

const elementWithDataNumber50 = document.querySelector("[data-number='50']");
console.log(elementWithDataNumber50);

// console.log(document.querySelector("data-number" == 50));

/*
5. Выведите содержимое тега title в консоль.
*/

console.log(`5. Выведите содержимое тега title в консоль.`);

console.log(document.querySelector("title"));

/*
6. Получите элемент с классом "card-title" и выведите его родительский узел в консоль.
*/

console.log(
  `6. Получите элемент с классом "card-title" и выведите его родительский узел в консоль.`
);

const cardTitle = document.querySelector(".card-title");
console.log(cardTitle.parentElement);

/*
7. Создайте тег p`, запишите внутри него текст "Привет" и добавьте созданный тег в начало элемента, который имеет класс "card".
*/

console.log(
  `7. Создайте тег "p", запишите внутри него текст "Привет" и добавьте созданный тег в начало элемента, который имеет класс "card".`
);
const paragraphElem = document.querySelector(".card");
const paragraphElemText = document.createElement("p");
paragraphElemText.textContent = "Привет";
paragraphElem.prepend(paragraphElemText);
console.log(paragraphElem);

/*
8. Удалите тег h6 на странице.
*/

console.log(`8. Удалите тег h6 на странице.`);
const h6Elem = document.querySelector("h6");
console.log(h6Elem);
h6Elem && h6Elem.remove();
console.log(`Элемент адален: ${document.querySelector("h6")}`);
