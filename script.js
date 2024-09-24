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
    switch(op) {
        case '+':
            add(num1, num2);
            break;
        case '-':
            subtract(num1,num2);
            break;
        case '*':
            multiply(num1,num2);
            break;
        case '/':
            divide(num1,num2);
            break;
        default: 
            alert('Invalid, please try again.');
    }
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

btn1.addEventListener('click', () => {
    displayDiv.textContent += '1';
})