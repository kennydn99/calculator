const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const multiply = function(a, b) {
	return a * b;
};

const divide = function(a, b) {
	return a / b;
};

let firstNum, operator, secondNum;

function operate(x, op, y) {
    switch (op) {
        case '+':
            console.log(add(x, y));
            break;
        case '-':
            console.log(subtract(x, y));
            break;
        case '*':
            console.log(multiply(x, y));
            break;
        case '/':
            console.log(divide(x, y));
            break;
        default:
            console.log("Invalid operator");
    }
};

console.log(operate(1, '+', 1));
console.log(operate(1123, '-', 186));
console.log(operate(21, '*', 138));
console.log(operate(52, '/', 4));
console.log(operate(1, '?', 1));

const display = document.querySelector('.display');
const digitBtns = document.querySelectorAll('.digit');

let displayValue = display.textContent;
digitBtns.forEach( (num) => {
    num.addEventListener('click', () => {
        displayValue += num.textContent;
        display.textContent = displayValue;
    });
});

const clearBtn = document.querySelector('.clear');
clearBtn.addEventListener('click', () => {
    displayValue = "";
    display.textContent = displayValue;
});