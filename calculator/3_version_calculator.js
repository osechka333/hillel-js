const action = prompt(`Specify the action for the calculation (+ - / *')?`);
const operandA = getOperand('First Number');
const operandB = getOperand('Second Number');
let result = calculate(action, operandA, operandB);

showResults(action, operandA, operandB, result);

function getOperand(operandName) {
    return Number(prompt(`Specify the ${operandName}`))
}
function calculate(firstNumber, secondNumber, action) {
    switch (action) {
        case '+': return firstNumber + secondNumber;
        case '-': return firstNumber - secondNumber;
        case '/': return firstNumber / secondNumber;
        case '*': return firstNumber * secondNumber;
    }
}
function showResults(operator, numA, numB, result) {
    alert(`${numA} ${operator} ${numB} = ${result}`);
}
