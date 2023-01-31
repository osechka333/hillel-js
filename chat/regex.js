let regexp = /\bLOVE/ig;

alert(regexp.test('I love JavaScript') ); // true

alert(regexp.test('I JavaScript') ); // false


let regexp = /ing$/g;

alert( regexp.test('Good morning') ); // true

alert( regexp.test('Good morning!') ); // false