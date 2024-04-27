"use strict";

/*
1. Ко всем элементам, имеющим класс "dropdown-item" добавить еще один класс "super-dropdown", необходимо использовать методы forEach и querySelectorAll и свойство classList у элементов.
*/
console.log(
  `1. Ко всем элементам, имеющим класс "dropdown-item" добавить еще один класс "super-dropdown", необходимо использовать методы forEach и querySelectorAll и свойство classList у элементов.`
);
const dropdownItemClass = document.querySelectorAll(".dropdown-item");
console.log(dropdownItemClass);
dropdownItemClass.forEach((element) => {
  element.classList.add("super-dropdown");
});

/*
2. У элемента с классом btn необходимо убрать класс "btn-secondary", если он присутствует у этого элемента, либо добавить, если такого класса у элемента не было.
*/

console.log(
  `2. У элемента с классом btn необходимо убрать класс "btn-secondary", если он присутствует у этого элемента, либо добавить, если такого класса у элемента не было.`
);
const btnClass = document.querySelectorAll(".btn");
console.log(btnClass);
const btnSecondaryClass = "btn-secondary";
btnClass.forEach((element) => {
  if (element.classList.contains(btnSecondaryClass)) {
    element.classList.remove(btnSecondaryClass);
  } else {
    element.classList.add(btnSecondaryClass);
  }
});
console.log(btnClass);

/*
3. Необходимо удалить класс "dropdown-menu" у элемента, у которого присутствует класс "menu".
*/

console.log(
  `3. Необходимо удалить класс "dropdown-menu" у элемента, у которого присутствует класс "menu".`
);

const menuClass = document.querySelector(".menu");
console.log(menuClass);
menuClass.classList.remove("dropdown-menu");
console.log(document.querySelector(".menu"));

/*
4. Используя метод insertAdjacentHTML добавьте после div'a с классом "dropdown" следующую разметку:
`<a href="#">link</a>`
*/

console.log(
  '4. Используя метод insertAdjacentHTML добавьте после div с классом "dropdown" следующую разметку: `<a href="#">link</a>`"'
);
const dropdownClass = document.querySelector(".dropdown");
const link = `<a href="#">link</a>`;
dropdownClass.insertAdjacentHTML("afterend", link);

/*
5. У элемента с id "dropdownMenuButton" замените id на "superDropdown".
*/

console.log(
  `5. У элемента с id "dropdownMenuButton" замените id на "superDropdown".`
);
let dropdownMenuButtonID = document.getElementById("dropdownMenuButton");
dropdownMenuButtonID.id = "superDropdown";
console.log(`id dropdownMenuButton = ${dropdownMenuButtonID.id}`);

/*
6. Добавьте атрибут data-dd со значением 3 элементу у которого существует атрибут "aria-labelledby" равный "dropdownMenuButton" используя dataset.
*/
console.log(
  `6. Добавьте атрибут data-dd со значением 3 элементу у которого существует атрибут "aria-labelledby" равный "dropdownMenuButton" используя dataset.`
);
/*
7. Удалите атрибут type у элемента с классом "dropdown-toggle".
*/
console.log(`7. Удалите атрибут type у элемента с классом "dropdown-toggle".`);
const dropdownToggle = document.querySelector(".dropdown-toggle");
dropdownToggle.removeAttribute("type");
