const pets = [];
const beasts = [];

// Array.isArray()
console.log(Array.isArray('ol'));
console.log(Array.isArray(pets));

// .includes()
console.log(pets.includes('elephant'));

// .indexOf()
console.log(pets.indexOf('elephant'));

// .join()
console.log(pets.join(' '));

// .concat()
console.log(pets.concat(beasts));
console.log([...pets, ...beasts]);

// .splice()
let arr = ['one', 'two', 'three'];
delete arr[1]; // returns empty value
arr.splice(1,1);