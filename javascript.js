function add(a,b) {
	return a+b;
};

function subtract(a,b) {
    return a-b;
};

function divide(a,b) {
    return (a/b);
};

function multiply(a,b) {
    return a*b;
};

function operate(operator,a,b) {
    if (operator == 'add') {
        return add(a,b);
    } else if (operator == 'subtract') {
        return subtract(a,b);
    } else if (operator == 'divide') {
        return divide(a,b);
    } else if (operator == 'multiply') {
        let result = multiply(a,b);
        return result;
    } else {
        console.log('error');
    }
}