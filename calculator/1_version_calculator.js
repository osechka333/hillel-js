const selectedOperator = prompt(`Specify the action for the calculation (+ - / *')?`);
const firstNo = parseFloat(prompt('Specify the first number'));
const secondNo = parseFloat(prompt('Specify the second number'));

alert(calculation(firstNo, secondNo, selectedOperator));

function calculation(firstNumber, secondNumber, operand) {
    let result;
    switch (operand) {
        case '+':
            result =  firstNumber + secondNumber;
            alert(`${firstNumber} ${operand} ${secondNumber} = ${result}`);
            break;
        case '-':
            result =  firstNumber - secondNumber;
            alert(`${firstNumber} ${operand} ${secondNumber} = ${result}`);
            break;
        case '/':
            result =  firstNumber / secondNumber;
            alert(`${firstNumber} ${operand} ${secondNumber} = ${result}`);
            break;
        case '*':
            result =  firstNumber * secondNumber;
            alert(`${firstNumber} ${operand} ${secondNumber} = ${result}`);
            break;
        default:
            alert('Not valid operand is specified');
            break;
    }
    if (!isFinite(result)) {
        if(isNaN(result)) {
            alert('Not valid numbers are specified');
        } else {
            alert('Infinity is your result');
        }
    }
}