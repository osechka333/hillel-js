const action = prompt(`Specify the action for the calculation (+ - / *')?`);
const operandA = getOperand('First Number');
const operandB = getOperand('Second Number');

let result = calculate(action, operandA, operandB);

showResults(action, operandA, operandB, result);

function getOperand(operandName) {
    return Number(prompt(`Specify the ${operandName}`))
}

function calculate(action, numA, numB) {
    switch (action) {
        case '+': return add(numA, numB);
        case '-': return sub(numA, numB);
        case '/': return numA / numB;
        case '*': return numA * numB;
    }
}

function showResults(operator, numA, numB, result) {
    alert(`${numA} ${operator} ${numB} = ${result}`);
}

function add(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}