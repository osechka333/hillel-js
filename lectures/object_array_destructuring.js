let user = new Object();
let user1 = {}// literal
let arr = new Array();

// обьєкты - хранить данные ключ - значение, не упорядоченные коллекции данных
// массивы - упорядоченные коллекции данных
// деструктуризация (синтаксис) - распаковать значения из массива или свойства обьекта в переменную

const person = ['Tom', 'Smith', 42, null, 'Kyiv', 'Ukraine'];

const firstName = person[0];
const secondName = person[1];
const age = person[2];
// the same thing as before
const [firstName, secondName, age] = person;
console.log(firstName, secondName, age);

// REST ... to get other elements without assigning variable
const [firstName, secondName, age, ...rest] = person;
console.log(firstName, secondName, age, rest);
// to skip one elements
const [firstName,, age, ...rest] = person;
console.log(firstName, secondName, age, rest);

// to add value
const [firstName = 'Ola',, age, ...rest] = person;
console.log(firstName, age, rest);

// https://www.javascripttutorial.net/es6/javascript-object-destructuring/