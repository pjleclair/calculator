function add(a,b) {
	return a+b;
};

function subtract(a,b) {
    return a-b;
};

function divide(a,b) {
    return (a / b);
};

function multiply(a,b) {
    return a*b;
};

function operate(operator,a,b) {
    if (operator == '+') {
        return add(a,b);
    } else if (operator == '-') {
        return subtract(a,b);
    } else if (operator == '%') {
        return divide(a,b);
    } else if (operator == 'x') {
        return multiply(a,b);
    } else {
        console.log('error');
    }
}

function equals() {
    num2 = displayBox[0].innerHTML;
    displayBox[0].innerHTML = operate(operator,+num1,+num2);
}

function displayNum(num) {
    let displayText = displayBox[0].innerHTML;
    displayBox[0].innerHTML = `${displayText+num}`;
}

let num1, num2, operator, numCount, result;
numCount = 0;
const numButtons = document.getElementsByClassName('calc-num');
const clearButton = document.getElementsByClassName('clear-button');
const functionButtons = document.getElementsByClassName('function');
const equalsButton = document.getElementsByClassName('equals-button');
const displayBox = document.getElementsByClassName('display');
for (button of numButtons) {
    let buttonNum = button.innerHTML;
    button.addEventListener("click", function () {displayNum(buttonNum)});
}

for (func of functionButtons) {
    let funcOperator = func.innerHTML;
    func.addEventListener("click", function() {
        if (numCount == 0) {
            num1 = displayBox[0].innerHTML;
        } else {
            return;
        }
        operator = funcOperator;
        displayBox[0].innerHTML = '';
        numCount++;
    });
}
equalsButton[0].addEventListener("click", function(){equals()});
clearButton[0].addEventListener("click", function(){
    displayBox[0].innerHTML = '';
    operator = '';
    num1 = 0;
    num2 = 0;
    numCount = 0;
});

