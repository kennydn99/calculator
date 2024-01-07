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
        this.prevBtnType = undefined;
        
        this.clearCalc = function() {
            console.log("Calculator clear function");
            this.prevOperand = undefined;
            this.currOperand = undefined;
            this.operator = undefined;
            console.log(this.prevOperand, this.currOperand, this.operator);
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
        if(myCalculator.prevBtnType === 'equals' || myCalculator.prevBtnType === 'op') {
            myCalculator.updateDisplay('');
        }
        myCalculator.appendNumber(num.textContent);
        operatorBtns.forEach((op) => op.classList.remove('is-depressed'));
        myCalculator.prevBtnType = 'digit';
    });
});

decimalBtn.addEventListener('click', () => {
    if (myCalculator.prevBtnType === 'op') {
        myCalculator.appendNumber('0.');
        console.log('zero.');
    } else if(!display.textContent.includes('.')) {
        console.log(myCalculator.prevBtnType)
        myCalculator.appendNumber('.');
    }
    myCalculator.prevBtnType = 'decimal';
})

clearBtn.addEventListener('click', () => {
    myCalculator.clearCalc();
    myCalculator.prevBtnType = 'clear';
});

operatorBtns.forEach((operatorBtn) => {
    operatorBtn.addEventListener('click', () => {
        if(myCalculator.prevOperand && myCalculator.operator && myCalculator.prevBtnType !== 'equals') {
            console.log('Need to calculate and update display');
            myCalculator.currOperand = display.textContent;
            let currentAns = operate(myCalculator.prevOperand, myCalculator.operator, myCalculator.currOperand);
            console.log(currentAns);
            myCalculator.updateDisplay(currentAns);
            
        }
        if(myCalculator.prevBtnType === 'digit' || myCalculator.prevBtnType === 'equals') {
            myCalculator.operator = operatorBtn.textContent;
            myCalculator.prevOperand = display.textContent;
        } else if(myCalculator.prevBtnType === 'op') {
            operatorBtns.forEach((op) => op.classList.remove('is-depressed'));
            myCalculator.operator = operatorBtn.textContent;
        }
        operatorBtn.classList.add('is-depressed');
        console.log(myCalculator.prevOperand, myCalculator.operator, myCalculator.currOperand);
        //myCalculator.updateDisplay("")
        myCalculator.prevBtnType = 'op';
    });
});

equalsBtn.addEventListener('click', () => {
    myCalculator.currOperand = display.textContent;
    let answer = operate(myCalculator.prevOperand, myCalculator.operator, myCalculator.currOperand);
    console.log(answer);
    myCalculator.updateDisplay(answer);
    myCalculator.prevBtnType = 'equals';
});

