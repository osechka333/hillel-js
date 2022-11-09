const action = getAction();
const firstNo = getNumber('first number');
const secondNo = getNumber('second number');
const validatedOperator = isValidOperator(action);
const validatedNumber1 = isValidNumber(firstNo);
const validatedNumber2 = isValidNumber(secondNo);

getResults(action, firstNo, secondNo);

function getAction() {
    return prompt(`Specify the action for the calculation (+ - / *')?`);
}
function getNumber(number) {
    return Number(prompt(`Specify the ${number}`))
}
function isValidOperator(action) {
    // if ((result.includes('+') || result.includes('-') || result.includes('*') || result.includes("/"))) {
    if (['+','-','*','/'].includes(action)){
        return true;
    }
}
// function isValidNumber(numA, numB) {
//     if(!(isNaN(numA)) && !(isNaN(numB))) {
//         return true;
//     }
// }
function isValidNumber(number) {
    if(!(isNaN(number))) {
        return true;
    }
}
function compute(action, numA, numB) {
    switch (action) {
        case '+': return numA + numB;
        case '-': return numA - numB;
        case '/': return numA / numB;
        case '*': return numA * numB;
    }
}
function getResults(operator, numA, numB) {
    if (validatedOperator && validatedNumber1 && validatedNumber2) {
        let result = compute(action, firstNo, secondNo);
        alert(`${numA} ${operator} ${numB} = ${result}`);
    } else {
        alert('Invalid data specified');
    }
}