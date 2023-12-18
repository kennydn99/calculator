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
const clearBtn = document.querySelector('.clear');
const operatorBtns = document.querySelectorAll('.operator');
const equalsBtn = document.querySelector('.equals');

class Calculator {
    constructor(prevOperand, currOperand) {
        this.prevOperand = prevOperand;
        this.currOperand = currOperand;
        this.operator = undefined;
        
        this.clearCalc = function() {
            console.log("Calculator clear function");

            this.updateDisplay("");
        };
        
        this.updateDisplay = function(displayValue) {
            display.textContent = displayValue;
        };
    }
};

const myCalculator = new Calculator();
digitBtns.forEach((num) => {
    num.addEventListener('click', () => {
        let input = display.textContent;
        input += num.textContent;
        myCalculator.updateDisplay(input);
    });
});

clearBtn.addEventListener('click', () => {
    myCalculator.clearCalc();
});

operatorBtns.forEach((operatorBtn) => {
    operatorBtn.addEventListener('click', () => {
        myCalculator.operator = operatorBtn.textContent;
    });
});