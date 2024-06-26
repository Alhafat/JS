/*1. Необходимо вывести сообщение в консоль "все теги прогрузились", когда все теги будут созданы браузером.*/
console.log(
  `1. Необходимо вывести сообщение в консоль "все теги прогрузились", когда все теги будут созданы браузером.`
);
function handleDOMLoaded() {
  console.log("все теги прогрузились");
}
document.addEventListener("DOMContentLoaded", handleDOMLoaded);

/*2. Необходимо вывести сообщение в консоль "страница загрузилась", когда все ресурсы страницы будут загружены.*/
console.log(
  `2. Необходимо вывести сообщение в консоль "страница загрузилась", когда все ресурсы страницы будут загружены.`
);
function handleWindowLoaded() {
  console.log("страница загрузилась");
}
window.addEventListener("load", handleWindowLoaded);

/*3. При клике на какой-либо тег на странице в консоль должно выводиться сообщение наподобие:*/
/*- Класс "super_element" присутствует в элементе "div".*/
/*- сообщение должно определять присутствует или отсутствует класс "super_element"*/
/*- у элемента, а также выводить в нижнем регистре верный тег в данной строке, по*/
/*- которому был совершен клик.*/
/*- Необходимо использовать делегирование.*/
console.log(
  `3. При клике на какой-либо тег на странице в консоль должно выводиться сообщение`
);
function handleClick(event) {
  const target = event.target;
  const tagName = target.tagName.toLowerCase();
  if (target.classList.contains("super_element")) {
    console.log(`Класс "super_element" присутствует в элементе "${tagName}".`);
  }
}
document.addEventListener("click", handleClick);

/*4. Сделайте, чтобы при наведении на textarea в консоли появлялось сообщение: "Вы навели на textarea."*/
console.log(
  `4. Сделайте, чтобы при наведении на textarea в консоли появлялось сообщение: "Вы навели на textarea.`
);
function handleTextareaHover() {
  console.log("Вы навели на textarea.");
}
const textarea = document.querySelector("textarea");
textarea.addEventListener("mouseenter", handleTextareaHover);

/*5. Необходимо повесить событие клика на тег ul. В обработчике события в консоль необходимо выводить текст, который записан внутри элемента кнопки, по которой был произведен клик. Если клик был не по кнопке, то ничего выводить не нужно. Необходимо использовать делегирование.*/
console.log(
  `5. Необходимо повесить событие клика на тег ul. В обработчике события в консоль необходимо выводить текст, который записан внутри элемента кнопки, по которой был произведен клик. Если клик был не по кнопке, то ничего выводить не нужно. Необходимо использовать делегирование.`
);
function handleUlClick(event) {
  const target = event.target;
  if (target.tagName.toLowerCase() === "button") {
    console.log(target.textContent);
  }
}
const ul = document.querySelector("ul");
ul.addEventListener("click", handleUlClick);

/*6. Вопрос: Почему в console.log пишется сначала текст из 5 задания и только потом выводится текст из 3 задания, если мы кликаем по кнопкам в ul? Ответ необходимо написать здесь же, под этим комментарием, своими словами.*/
console.log(
  `6. Вопрос: Почему в console.log пишется сначала текст из 5 задания и только потом выводится текст из 3 задания, если мы кликаем по кнопкам в ul? Ответ необходимо написать здесь же, под этим комментарием, своими словами.`
);
console.log(
  `При клике на кнопки в ul сначала выводится текст из 5 задания, а затем из 3 задания, потому что обработчик клика на ul срабатывает раньше, чем на кнопках, и выводит сообщение первым.`
);

/*7. С помощью JS необходимо изменить цвет заднего фона каждого второго тега li.*/
console.log(
  `7. С помощью JS необходимо изменить цвет заднего фона каждого второго тега li.`
);

const liElements = document.querySelectorAll("li");
liElements.forEach((li, index) => {
  if (index % 2) {
    li.style.backgroundColor = "lightgray";
  }
});
