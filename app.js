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

let firstNum, operator, secondNum, solution;

function operate(x, op, y) {
    switch (op) {
        case '+':
            return add(x, y);
        case '-':
            return subtract(x, y);
        case '*':
            return multiply(x, y);
        case '/':
            return divide(x, y);
        default:
            console.log("Invalid operator");
    }
};

const display = document.querySelector('.display');
const digitBtns = document.querySelectorAll('.digit');

let displayValue = display.textContent;
digitBtns.forEach((num) => {
    num.addEventListener('click', () => {
        displayValue += num.textContent;
        display.textContent = displayValue;
    });
});

const clearBtn = document.querySelector('.clear');
clearBtn.addEventListener('click', () => {
    displayValue = "";
    display.textContent = displayValue;
    firstNum, secondNum, operator, solution = null;
});

const operatorBtns = document.querySelectorAll('.operator');
operatorBtns.forEach((operatorBtn) => {
    operatorBtn.addEventListener('click', () => {
        operator = operatorBtn.textContent;
        if(firstNum == null) {
            firstNum = +displayValue;
            displayValue = "";
        } else {
            secondNum = +displayValue;
            displayValue = "";
        }
        console.log(`firstNum: ${firstNum}, operator: ${operator}, secondNum: ${secondNum}`);
        if(firstNum != null && secondNum != null) {
            solution = operate(firstNum, operator, secondNum);
            display.textContent = solution;
            firstNum = solution;
            console.log(solution);
        }
    });
}

);