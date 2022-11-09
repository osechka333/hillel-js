const selectedOperator = prompt(`Specify the action for the calculation (+ - / *')?`);
const firstNo = parseFloat(prompt('Specify the first number'));
const secondNo = parseFloat(prompt('Specify the second number'));

calculate(firstNo, secondNo, selectedOperator);

function calculate(firstNumber, secondNumber, action) {
    let userActions = `${firstNumber} ${action} ${secondNumber}`;
    let result;
    switch (action) {
        case '+':
            result = firstNumber + secondNumber;
            break;
        case '-':
            result = firstNumber - secondNumber;
            break;
        case '/':
            result = firstNumber / secondNumber;
            break;
        case '*':
            result = firstNumber * secondNumber;
            break;
        default:
            alert('Not valid action is specified');
            break;
    }
    alert(`${userActions} = ${result}`);
}