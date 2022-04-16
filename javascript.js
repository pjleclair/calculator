function add(a,b) {
	return a+b;
};

function subtract(a,b) {
    console.log(a-b);
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
    if (numCount==1)
        result = result + +displayBox[0].innerHTML;
    if (numCount == 2) {
        num2 = displayBox[0].innerHTML;
        result = operate(operator,+num1,+num2);
    } else if ((numCount > 2)) {
        let num = +displayBox[0].innerHTML;
        result = operate(operator,+result,+num);
    }
    displayBox[0].innerHTML = +result;
}

function displayNum(num) {
    let displayText = displayBox[0].innerHTML;
    displayBox[0].innerHTML = `${displayText+num}`;
}

let nums = {};
let num1, num2, operator, numCount, result, CALCULATED;
numCount = 1;
result = 0;
CALCULATED = false;
const numButtons = document.getElementsByClassName('calc-num');
const clearButton = document.getElementsByClassName('clear-button');
const functionButtons = document.getElementsByClassName('function');
const equalsButton = document.getElementsByClassName('equals-button');
const displayBox = document.getElementsByClassName('display');
for (button of numButtons) {
    let buttonNum = button.innerHTML;
    button.addEventListener("click", function () {
        displayNum(buttonNum);
    });
}
/*Function is broken due to taking operators in incorrect order.*/
for (func of functionButtons) {
    let funcOperator = func.innerHTML;
    func.addEventListener("click", function() {
        nums[numCount] = +displayBox[0].innerHTML;
        operator = funcOperator;
        if ((numCount%2) == 1) {
            num1 = nums[numCount];
            if (numCount > 2) {
                result = operate(operator,+result,+num1);
            }
        } else if ((numCount%2) == 0) {
            num2 = nums[numCount];
            if (numCount == 2) {
                result = operate(operator,+num1,+num2);
                console.log(result);
            } else if (numCount > 2) {
                result = operate(operator,+result,+num2);
            }
        }
        numCount++;
        displayBox[0].innerHTML = '';
    });
}
equalsButton[0].addEventListener("click", function(){equals()});
clearButton[0].addEventListener("click", function(){
    displayBox[0].innerHTML = '';
    operator = '';
    nums = {};
    numCount = 1;
    result = 0;
});

