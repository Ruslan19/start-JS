"use strict";

//alert('Hello') 

/* const result = confirm('Вам есть 18 лет?');
console.log(result); */

/* const answer = prompt('Вам есть 18 лет?', '18');
console.log(answer); */

/* const answers = [];

 answers[0] = prompt('Как ваше имя?', '');
answers[1] = prompt('Как ваш фамилия?', '');
answers[3] = prompt('Сколько вам лет?', ''); 

console.log(typeof(answers)); */


/* const category = 'toys';

console.log(`https://someurl.com/${category}/5`);


const user = "Ruslan"

alert(`Привет, ${user}`)
 */


/* let incr = 10,
    decr = 10;

//++incr;
//--decr;

console.log(++incr);
console.log(--decr);

console.log(5%2)

console.log(2*4 === 8);

const isChecked = true,
      isClose = true;

console.log(isChecked && isClose); */

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Один из последних просмотренных фильмов?', ''),
      b = prompt('На сколько оцените его?',''),
      c = prompt('Один из последних просмотренных фильмов?', ''),
      d = prompt('На сколько оцените его?',''); 

personalMovieDB.movies[a]=b;
personalMovieDB.movies[c]=d;

console.log(personalMovieDB);

