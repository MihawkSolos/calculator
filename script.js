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
    return Math.round((num1 / num2) * 100) / 100;
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
let op = '';
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
    num1 = parseFloat(displayDiv.textContent);
    if(op === ''){
        op = '+';
        displayDiv.textContent += ' + ';
    }
    
    if(checkNum(num1)){
        alert('Please enter a number.');
        displayDiv.textContent = '';
    }
})

minBtn.addEventListener('click', () => {
    num1 = parseFloat(displayDiv.textContent);
    if(op === ''){
        op = '-';
        displayDiv.textContent += ' - ';
    }
    
    if(checkNum(num1)){
        alert('Please enter a number.');
        displayDiv.textContent = '';
    }
})

mulBtn.addEventListener('click', () => {
    num1 = parseFloat(displayDiv.textContent);
    if(op === ''){
        op = '*';
        displayDiv.textContent += ' * ';
    }
    
    if(checkNum(num1)){
        alert('Please enter a number.');
        displayDiv.textContent = '';
    }
})

divBtn.addEventListener('click', () => {
    num1 = parseFloat(displayDiv.textContent);
    if(op === ''){
        op = '/';
        displayDiv.textContent += ' / ';
    }
    
    if(checkNum(num1)){
        alert('Please enter a number.');
        displayDiv.textContent = '';
    }
})

eqBtn.addEventListener('click', () => {
    // Find the operator's index
    const operatorIndex = displayDiv.textContent.indexOf(op);
    
    // Extract num2 from the string
    if (operatorIndex !== -1) {
        num2 = parseFloat(displayDiv.textContent.slice(operatorIndex + 2).trim());
    }

    if (checkNum(num2)) {
        alert('Please enter a number.');
        displayDiv.textContent = '';
    } else if (op === '/' && num2 === 0) {
        displayDiv.textContent = '';
        alert('Error, cannot divide by zero!');
    } else {
        result = operate(op, num1, num2);
        displayDiv.textContent = result;
        // Reset states
        num1 = result;
        op = '';
    }
});


clearBtn.addEventListener('click', () => {
    displayDiv.textContent = '';
})



// check if num1 and num2 are empty 
function checkNum(num) {
    return isNaN(num) ? true: false;
}