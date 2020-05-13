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

/* const num = 50;
//(num == 50) ? console.log("ОК") : console.log("Err");

switch (num) {
    case 49: 
        console.log('Неверно');
        break;
    case 100:
        console.log('Неверно');
        break;
    case 50: 
        console.log('верно');
        break;
    default:
        console.log('Нет');
        break;
    
} */

/* let num = 50; */
/* 
while (num < 55){
    console.log(num);
    num++;
} */

/* do {
    console.log(num);
    num++;
}

while(num < 55); */

/* for (let i = 1; i < 10; i++)
{
    if (i == 6) {
        break;
    }
    console.log(i);
} */
/* const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

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
 */

 
/* for(let i = 0; i < 2; i++)
{
    const a = prompt('Один из последних просмотренных фильмов?', ''),
          b = prompt('На сколько оцените его?','');
        if(a != null && b != null && a != '' && b != '' && a.length < 50)
        {
            personalMovieDB.movies[a] = b;
            console.log('Done');
        }
        else
        {
            console.log('Error');
            i--;
        }
} */

/* const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

let i = 0; */
/* do {
    const a = prompt('Один из последних просмотренных фильмов?', ''),
          b = prompt('На сколько оцените его?','');
        if(a != null && b != null && a != '' && b != '' && a.length < 50)
        {
            personalMovieDB.movies[a] = b;
            console.log('Done');
            i++;        
        }
        else
        {
            console.log('Error');
            i--;
        }
}
while(i < 2);  */
/* 
while(i < 2){
    const a = prompt('Один из последних просмотренных фильмов?', ''),
          b = prompt('На сколько оцените его?','');
        if(a != null && b != null && a != '' && b != '' && a.length < 50)
        {
            personalMovieDB.movies[a] = b;
            console.log('Done');
            i++;
        }
        else
        {
            console.log('Error');
            i--;
        }
}
 
if (personalMovieDB.count < 10)
{
    console.log('Просмотрено довольно мало фильмов');
}
else if (10 < personalMovieDB.count < 30)
{
    console.log('Вы классический зритель');
}
else if (personalMovieDB.count > 30)
{
    console.log('Вы киноман');
}
else 
{
    console.log('Произошла ошибка');
} */

/* let num = 20;

function showFirstMessage(text) {
    console.log(text);  
    let num = 10;

}

showFirstMessage('Hello Man');
console.log(num); */

/* function calc(a, b){
    return (a + b);
}

console.log(calc(4,4)); */

/* function ret() {
    let num =50;
    return num;
}

const anotherNum = ret();
console.log(anotherNum);

const logger = function() {
    console.log("hello")
};

logger();

const calc = (a, b) =>  a + b ; */
/* 
const str = "test";

console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str);

const fruit = "Some fruit";

console.log(fruit.indexOf("q"));

const logg = "Hello World"; */

//console.log(logg.slice(6));

//console.log(logg.substring(6, 11));

//console.log(logg.substr(6, 5));
/* 
const num = 12.2;
console.log(Math.round(num));

const test = "12.2px";
console.log(parseInt(test));
console.log(parseFloat(test)); */




