const ACTIONS = { '+': sum,'-': subtraction,'*': multiplication,'/': division } // LINKS TO THE FUNCTIONS
const ACTION_LIST = Object.keys(ACTIONS);
const action = getAction();
const firstNo = getNumber('first number');
const secondNo = getNumber('second number');

getResults(action, firstNo, secondNo);

function getAction() {
    return prompt(`Specify the action ${ACTION_LIST.join(',')}`);
}
function getNumber(number) {
    return Number(prompt(`Specify the ${number}`))
}
function isValidOperator(action) {
    if (ACTION_LIST.includes(action)){
        return true;
    }
}
function isValidNumber(number) {
    if(!(isNaN(number))) {
        return true;
    }
}
function compute(operator, numA, numB) {
    return ACTIONS[operator](numA, numB);
}
function sum(numA, numB){
    return numA + numB;
}
function subtraction(numA, numB){
    return numA - numB;
}
function division(numA, numB){
    return numA / numB;
}
function multiplication(numA, numB){
    return numA * numB;
}
function getResults(operator, numA, numB) {
    if (isValidOperator(action) && isValidNumber(firstNo) && isValidNumber(secondNo)) {
        let result = compute(action, firstNo, secondNo);
        alert(`${numA} ${operator} ${numB} = ${result}`);
    } else {
        alert('Invalid data specified');
    }
}