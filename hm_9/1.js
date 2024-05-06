/*1. При изменении значения в input с id="from", значение содержащееся в нем должно моментально отображаться в span. То есть при печати в input'е тег span также должен меняться.*/
console.log(
  `1. При изменении значения в input с id="from", значение содержащееся в нем должно моментально отображаться в span. То есть при печати в input'е тег span также должен меняться.`
);

const inputFrom = document.getElementById("from");
const spanElement = document.querySelector("span");

inputFrom.addEventListener("input", function () {
  spanElement.textContent = inputFrom.value;
});

/*2. При клике на кнопку с классом messageBtn необходимо элементу с классом message:
- добавить два класса: animate_animated и animate_fadeInLeftBig
- поставить данному элементу стиль visibility в значение 'visible'.*/
console.log(
  `2. При клике на кнопку с классом messageBtn необходимо элементу с классом message`
);

const messageBtn = document.querySelector(".messageBtn");
const messageElement = document.querySelector(".message");

messageBtn.addEventListener("click", function () {
  messageElement.classList.add("animate_animated", "animate_fadeInLeftBig");
  messageElement.style.visibility = "visible";
});

/*3. Необходимо при отправке формы проверить, заполнены ли все поля в этой форме. Если какое-либо поле не заполнено, форма не должна отправляться, также должны быть подсвечены незаполненные поля (необходимо поставить класс error незаполненным полям). Как только пользователь начинает заполнять какое-либо поле, необходимо, при вводе в данное поле, произвести проверку:
- Если поле пустое, необходимо данное поле подсветить (поставить класс error данному полю).
- Если поле было чем-либо заполнено, подсветку (класс error) необходимо убрать.*/
console.log(
  `3. Необходимо при отправке формы проверить, заполнены ли все поля в этой форме. Если какое-либо поле не заполнено, форма не должна отправляться, также должны быть подсвечены незаполненные поля (необходимо поставить класс error незаполненным полям). Как только пользователь начинает заполнять какое-либо поле, необходимо, при вводе в данное поле, произвести проверку`
);

const form = document.querySelector("form");

form.addEventListener("submit", function (event) {
  event.preventDefault(); // Предотвращаем отправку формы по умолчанию

  // Получаем все поля формы
  const formInputs = form.querySelectorAll("input, select");
  let formIsValid = true;

  // Проверяем каждое поле на заполненность
  formInputs.forEach(function (input) {
    if (input.value.trim() === "") {
      input.classList.add("error");
      formIsValid = false;
    } else {
      input.classList.remove("error");
    }
  });

  // Если форма валидна, можно отправить данные
  if (formIsValid) {
    console.log("Форма отправлена успешно!");
    form.reset(); // Очищаем поля формы
  } else {
    console.log("Форма содержит ошибки. Пожалуйста, заполните все поля.");
  }

  // Добавляем обработчики ввода для полей формы
  formInputs.forEach(function (input) {
    input.addEventListener("input", function () {
      if (input.value.trim() === "") {
        input.classList.add("error");
      } else {
        input.classList.remove("error");
      }
    });
  });
});
