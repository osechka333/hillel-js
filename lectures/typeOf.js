// alert('Test');
// console.log('Console details');
//const userName = prompt('What is your name?'); //the results is string
// alert(`Hello, ${userName}! How are you?`);
// template literal - use instead of +
// const isMorning = confirm('Is morning?');
// document.querySelector('h1').style.color = 'red';
// console.log(typeof number); // the result is the type of data
// console.log(isMorning);
//const numberA = prompt('Enter the name', 'Mary'); //always return the string
// alert(Number(numberA)); // only for string, boolean, number

// console.log(!42); // !Boolean -> !true  -> false
// console.log(!''); // !Boolean('') -> !false -> true

// ||
console.log(true || true); // true
console.log(false || true); // true
// !
console.log(!42); // !Boolean -> !true  -> false
console.log(!''); // !Boolean('') -> !false -> true

// if(num){ // -> Boolean('42') => true
//     alert(`You enter: ${num}`);
// } else {
//     alert('Wrong name');
// }

// !!
Boolean(42) // true
// !!42 // true
// !!Boolean(42) => !!true -> !false -> true

const num  = prompt('Enter number');

// if(num){ // -> Boolean('42') => true
//     alert(`You enter: ${num}`);
// } else {
//     alert('Wrong name');
// }

// if(!isNaN(num)){ // -> !(Number('1aw') => NaN) -> !true => false
//     alert(`You enter: ${num}`);
// } else {
//     alert('Wrong name');
// }

const a = 42;
const b = 8;

if (a < b) {
    console.log(`${a} > ${b}`);
}
// if(a -b ) => Boolean(0) => false