"use strict";

/*
Необходимо из объекта post, вывести значения, к которым приписан комментарий, 
в консоль.
*/

const post = {
  author: "John", // вывести этот текст
  postId: 23,
  comments: [
    {
      userId: 10,
      userName: "Alex",
      text: "lorem ipsum",
      rating: {
        likes: 10,
        dislikes: 2, // вывести это число
      },
    },
    {
      userId: 5, // вывести это число
      userName: "Jane",
      text: "lorem ipsum 2", // вывести этот текст
      rating: {
        likes: 3,
        dislikes: 1,
      },
    },
  ],
};

// Вывести автора поста
console.log("Автор поста:", post.author);

// Вывести количество дизлайков первого комментария
console.log(
  "Количество дизлайков первого комментария:",
  post.comments[0].rating.dislikes
);

// Вывести идентификатор пользователя второго комментария
console.log(
  "Идентификатор пользователя второго комментария:",
  post.comments[1].userId
);

// Вывести текст второго комментария
console.log("Текст второго комментария:", post.comments[1].text);
