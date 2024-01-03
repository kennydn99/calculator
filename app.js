const add = function(a, b) {
	return parseFloat(a) + parseFloat(b);
};

const subtract = function(a, b) {
	return parseFloat(a) - parseFloat(b);
};

const multiply = function(a, b) {
	return parseFloat(a) * parseFloat(b);
};

const divide = function(a, b) {
	return parseFloat(a) / parseFloat(b);
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
const decimalBtn = document.querySelector('.decimal');

class Calculator {
    constructor(prevOperand, currOperand) {
        this.prevOperand = prevOperand;
        this.currOperand = currOperand;
        this.operator = undefined;
        
        this.clearCalc = function() {
            console.log("Calculator clear function");
            this.prevOperand, this.currOperand, this.operator = undefined;
            this.updateDisplay("");
        };
        
        this.updateDisplay = function(displayValue) {
            display.textContent = displayValue;
        };

        this.appendNumber = function(num) {
            display.textContent += num;
        }
    }
};

const myCalculator = new Calculator();
digitBtns.forEach((num) => {
    num.addEventListener('click', () => {
        myCalculator.appendNumber(num.textContent);
    });
});

decimalBtn.addEventListener('click', () => {
    myCalculator.appendNumber('.');
})

clearBtn.addEventListener('click', () => {
    myCalculator.clearCalc();
});

operatorBtns.forEach((operatorBtn) => {
    operatorBtn.addEventListener('click', () => {
        myCalculator.operator = operatorBtn.textContent;
        myCalculator.prevOperand = display.textContent;
        //console.log(myCalculator.prevOperand, myCalculator.operator, myCalculator.currOperand);
        myCalculator.updateDisplay("");
    });
});

equalsBtn.addEventListener('click', () => {
    myCalculator.currOperand = display.textContent;
    let answer = operate(myCalculator.prevOperand, myCalculator.operator, myCalculator.currOperand);
    console.log(answer);
    myCalculator.updateDisplay(answer);
});