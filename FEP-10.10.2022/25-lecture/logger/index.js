// const { sayHi } = require('./logger.js');
const sayHi = require('./logger.js');
const cowsay = require("cowsay");

// sayHi()

// console.log(sayHi)

console.log(cowsay.say({
  text : "I'm a moooodule",
  e : "(')(')",
  T : "U "
}));