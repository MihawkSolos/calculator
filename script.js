// add function
function add (num1, num2){
    return num1 + num2;
}

// subtract function
function subtract (num1, num2){
    return num1 - num2;
}

// multiply function
function multiply (num1, num2){
    return num1 * num2;
}

// divide function
function divide (num1, num2){
    return num1 / num2;
}

// operate function
function operate (op, num1, num2){
    let result = 0;
    switch(op) {
        case '+':
            result = add(num1, num2);
            break;
        case '-':
            result = subtract(num1,num2);
            break;
        case '*':
            result = multiply(num1,num2);
            break;
        case '/':
            result = divide(num1,num2);
            break;
        default: 
            alert('Invalid, please try again.');
    }
    return result;
}

/* Test
console.log(add(2,4));
console.log(subtract(5,2));
console.log(multiply(4,8));
console.log(divide(30,5));
*/

let num1;
let op;
let num2;
let result = 0;

let displayDiv = document.querySelector('.display');
displayDiv.classList.add('text');
displayDiv.textContent = "";


const btn1 = document.querySelector('.one');
const btn2 = document.querySelector('.two');
const btn3 = document.querySelector('.three');
const btn4 = document.querySelector('.four');
const btn5 = document.querySelector('.five');
const btn6 = document.querySelector('.six');
const btn7 = document.querySelector('.seven');
const btn8 = document.querySelector('.eight');
const btn9 = document.querySelector('.nine');
const btn0 = document.querySelector('.zero');
const plusBtn = document.querySelector('.plus');
const minBtn = document.querySelector('.minus');
const mulBtn = document.querySelector('.multiply');
const divBtn = document.querySelector('.divide');
const eqBtn = document.querySelector('.equal');
const clearBtn = document.querySelector('.clear');

btn1.addEventListener('click', () => {
    displayDiv.textContent += '1';
})

btn2.addEventListener('click', () => {
    displayDiv.textContent += '2';
})

btn3.addEventListener('click', () => {
    displayDiv.textContent += '3';
})

btn4.addEventListener('click', () => {
    displayDiv.textContent += '4';
})

btn5.addEventListener('click', () => {
    displayDiv.textContent += '5';
})

btn6.addEventListener('click', () => {
    displayDiv.textContent += '6';
})

btn7.addEventListener('click', () => {
    displayDiv.textContent += '7';
})

btn8.addEventListener('click', () => {
    displayDiv.textContent += '8';
})

btn9.addEventListener('click', () => {
    displayDiv.textContent += '9';
})

btn0.addEventListener('click', () => {
    displayDiv.textContent += '0';
})

plusBtn.addEventListener('click', () => {
    num1 = parseInt(displayDiv.textContent);
    op = '+';
    displayDiv.textContent += ' + ';
})

minBtn.addEventListener('click', () => {
    num1 = parseInt(displayDiv.textContent);
    op = '-';
    displayDiv.textContent += ' - ';
})

mulBtn.addEventListener('click', () => {
    num1 = parseInt(displayDiv.textContent);
    op = '*';
    displayDiv.textContent += ' * ';
})

divBtn.addEventListener('click', () => {
    num1 = parseInt(displayDiv.textContent);
    op = '/';
    displayDiv.textContent += ' / ';
})

eqBtn.addEventListener('click', () => {
    num2 = displayDiv.textContent;
    num2 = parseInt(num2.slice(num2.indexOf(op + 1)));
    result = operate(op, num1, num2);
    displayDiv.textContent = result;
})

clearBtn.addEventListener('click', () => {
    displayDiv.textContent = '';
})
