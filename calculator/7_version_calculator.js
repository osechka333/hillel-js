const ACTIONS = { '+': sum,'-': subtraction,'*': multiplication,'/': division }
const ACTION_LIST = Object.keys(ACTIONS);
const action = getAction();
const count = getOperandNumber();
const numbers = getOperandValues(count);
const calculatedResult = compute(action, numbers);

displayResults(action, numbers, calculatedResult);
console.log(calculatedResult);

function getAction() {
    let userAction;
    do {
        userAction = prompt(`Specify the action ${ACTION_LIST.join(',')}`);
    } while (!ACTION_LIST.includes(userAction));
    return userAction;
}

function getOperandNumber() {
    let userNumber;
    do {
        userNumber = prompt('Enter the number of operands');
    } while (isNaN(userNumber) || userNumber ==='' || userNumber >= 5 || userNumber <= 1);
    return userNumber;
}

function getOperandValues(count) {
    let number;
    let operands = [];
    for(let i = 0; i < count; i++) {
        do {
            number = prompt('Enter the number');
            operands.push(Number(number));
        } while (isNaN(number) || number ==='');
    }
    return operands;
}

function compute(operator, numbers) {
    return ACTIONS[operator](numbers);
}

function sum(array){
    return array.reduce((a, b) => a + b);
}

function subtraction(array){
    return array.reduce((a, b) => a - b);
}

function division(array){
    return array.reduce((a, b) => a / b);
}

function multiplication(array){
    return array.reduce((a, b) => a * b);
}

function displayResults(operator, numbers, result) {
    alert(`${numbers.join(` ${operator} `)} = ${result}`);
}
