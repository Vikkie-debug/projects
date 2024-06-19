let currentInput = '';
let operator = '';
let result = 0;

function appendDigit(digit) {
    currentInput += digit;
    updateDisplay();
}

function appendOperator(op) {
    operator = op;
    result = parseFloat(currentInput);
    currentInput = '';
}

function calculate() {
    let secondOperand = parseFloat(currentInput);
    switch (operator) {
        case '+':
            result += secondOperand;
            break;
        case '-':
            result -= secondOperand;
            break;
        case '*':
            result *= secondOperand;
            break;
        case '/':
            if (secondOperand === 0) {
                result = 'Error';
            } else {
                result /= secondOperand;
            }
            break;
    }
    currentInput = '';
    updateDisplay();
}

function clearDisplay() {
    currentInput = '';
    operator = '';
    result = 0;
    updateDisplay();
}

function updateDisplay() {
    document.getElementById('display').innerText = currentInput || result;
}