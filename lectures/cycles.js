let i = 0;

while (i < 3) { // till it has true // loop
    //i += 1
    i ++;
   //++ i;
}
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while
// for statement to be executed at least once
// ask till the statement true
let result = '';
// let i = 0;

do {
    i = i + 1;
    result = result + i;
} while (i < 5);

console.log(result);
// expected result: "12345"

let number;
do {
    number = prompt('Enter the number');
} while (isNaN(number) || num ==='');
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/do...while

let str = '';

for (let i = 0; i < 9; i++) {
    str = str + i;
}
// for (let i = 0; u = 8; i < 9; i++ u +=2)


const pets = ['cat', 'dog', 'elephant', 'rat'];
const person = {
    name: 'Olha',
    lastName: 'Pokolenko'
}

for(let i = 0; i < pets.length; i++) {
    console.log(i, pets[i]);
}

for (let pet of pets) {
    console.log(pet);
}
//https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Loops_and_iteration#for...of

for (const propName in person) {
    if (Object.hasOwnProperty(propName)) {
        console.log(propName, person[propName])
    }
}
// expected output: "012345678"
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for

while (i < 6) {
    if (i === 3) {
        break;
    }
    i = i + 1;
}

console.log(i);
// expected output: 3
