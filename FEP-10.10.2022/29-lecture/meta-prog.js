// const person = {
//   name: 'John',
// };

// person.age = 42;
// person.name = 'XXX';
// delete person.name;

// Object.preventExtensions(person); // prevent add
// person.age = 42;
// console.log(person)

// Object.seal(person); // prevent add + remove
// delete person.name;
// console.log(person)

// Object.freeze(person); // prevent add + remove + change
// person.name = 'XXX';
// console.log(person)

const person2 = {
  age: 42,
  set phone(value) {
    if (isNaN(value)) {
      throw new Error('Phone must be a number');
    }
    this._phone = value;
  },
  get phone() {
    return this._phone;
  },
};

Object.defineProperty(person2, 'name', {
  enumerable: true,
  configurable: true,
  // data
  value: 'John',
  writable: true,
  // accessor
  // set: () => {},
  // get: () => {},
})

// for (const prop in person2) {
//   console.log(prop)
// }

// person2.name = 'YYY';

person2.phone = '1234567891737';

console.log(person2)