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

function round(number) {
    //if number is decimal
    //count number of decimal places
    //if num of decimal places is > 8
    //then round tofixed(8)
    console.log(myCalculator.prevOperand, myCalculator.operator, myCalculator.currOperand);
    if(number % 1 != 0) {
        let numOfDecimals = number.toString().split('.')[1].length;
        if(numOfDecimals > 7) {
            return number.toFixed(7);
        }
    }
    return number;
    
}

const display = document.querySelector('.display');
const digitBtns = document.querySelectorAll('.digit');
const clearBtn = document.querySelector('.clear');
const operatorBtns = document.querySelectorAll('.operator');
const equalsBtn = document.querySelector('.equals');
const decimalBtn = document.querySelector('.decimal');
const signBtn = document.querySelector('.sign');
const percentBtn = document.querySelector('.percent');

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
            display.textContent = round(displayValue);
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
        if(display.textContent.length < 9) {
            myCalculator.appendNumber(num.textContent);
        }
        operatorBtns.forEach((op) => op.classList.remove('is-depressed'));
        myCalculator.prevBtnType = 'digit';
    });
});

decimalBtn.addEventListener('click', () => {
    if (myCalculator.prevBtnType === 'op' || myCalculator.prevBtnType === undefined || myCalculator.prevBtnType === 'clear') {
        myCalculator.updateDisplay('');
        myCalculator.appendNumber('0.');
    } else if(!display.textContent.includes('.')) {
        myCalculator.appendNumber('.');
    }
    myCalculator.prevBtnType = 'decimal';
})

clearBtn.addEventListener('click', () => {
    myCalculator.clearCalc();
    operatorBtns.forEach((op) => op.classList.remove('is-depressed'));
    myCalculator.prevBtnType = 'clear';
});

operatorBtns.forEach((operatorBtn) => {
    operatorBtn.addEventListener('click', () => {
        if(myCalculator.prevOperand && myCalculator.operator && myCalculator.prevBtnType !== 'equals') {
            myCalculator.currOperand = display.textContent;
            let currentAns = operate(myCalculator.prevOperand, myCalculator.operator, myCalculator.currOperand);
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
        myCalculator.prevBtnType = 'op';
    });
});

equalsBtn.addEventListener('click', () => {
    if(myCalculator.prevOperand && myCalculator.operator && myCalculator.prevBtnType !== 'equals'){
        myCalculator.currOperand = display.textContent;
        if(myCalculator.operator === '/' && myCalculator.currOperand ==='0') {
            myCalculator.updateDisplay('lmao');
        } else {
            let answer = operate(myCalculator.prevOperand, myCalculator.operator, myCalculator.currOperand);
            console.log(answer, round(answer));
            myCalculator.updateDisplay(answer);
        }
        myCalculator.prevOperand = undefined;
        myCalculator.prevBtnType = 'equals';
    }
});

signBtn.addEventListener('click', () => {
    let currentNum = display.textContent;
    if(!currentNum.includes('-') && currentNum != ''){
        myCalculator.updateDisplay('-' + currentNum);
    } else {
        myCalculator.updateDisplay(currentNum.replace('-', ''));
    }
});

percentBtn.addEventListener('click', () => {
    let currentNumber = display.textContent;
    let percentAns = operate(currentNumber, '/', 100);
    myCalculator.updateDisplay(percentAns);
});