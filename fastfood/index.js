'use strict'

function Hamburger({ price, calories }) {
    this.price = price;
    this.calories = calories;
}

Hamburger.prototype.addTopping = function({ price, calories }) {
    return [
        this.price += price,
        this.calories += calories
    ]
}

Hamburger.prototype.getPrice = function() {
    return this.price;
}

Hamburger.prototype.getCalories = function() {
    return this.calories;
}


Hamburger.SIZE_SMALL = {
    price: 50,
    calories: 20,
}

Hamburger.SIZE_MEDIUM = {
    price: 75,
    calories: 30,
}

Hamburger.SIZE_LARGE = {
    price: 75,
    calories: 30,
}

Hamburger.TOPPING_CHEEZE = {
    price: 10,
    calories: 20,
}

Hamburger.TOPPING_SALADE = {
    price: 20,
    calories: 5,
}

Hamburger.TOPPING_POTATO = {
    price: 15,
    calories: 10,
}

Hamburger.TOPPING_SEASONING = {
    price: 15,
    calories: 0,
}

Hamburger.TOPPING_MAYONNAISE = {
    price: 20,
    calories: 5,
}


const hamburgerS = new Hamburger(Hamburger.SIZE_SMALL);
const hamburgerM = new Hamburger(Hamburger.SIZE_MEDIUM);
const hamburgerL = new Hamburger(Hamburger.SIZE_LARGE);

console.log(hamburgerS.addTopping(Hamburger.TOPPING_MAYONNAISE));
console.log(hamburgerS.addTopping(Hamburger.TOPPING_CHEEZE));
console.log(hamburgerS.addTopping(Hamburger.TOPPING_SALADE));
console.log(hamburgerS.addTopping(Hamburger.TOPPING_POTATO));
console.log(hamburgerS.addTopping(Hamburger.TOPPING_SEASONING));
console.log(hamburgerL.addTopping(Hamburger.TOPPING_MAYONNAISE));

console.log('Price with sauce: ' + hamburgerM.getPrice());
console.log('Calories with sauce: ' + hamburgerM.getCalories());