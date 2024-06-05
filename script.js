let display = document.getElementById('display');
let currentInput = '';
let operator = '';
let previousInput = '';

function clearDisplay() {
    currentInput = '';
    operator = '';
    previousInput = '';
    display.textContent = '0';
}

function backspace() {
    currentInput = currentInput.slice(0, -1);
    if (currentInput === '') {
        display.textContent = '0';
    } else {
        display.textContent = currentInput;
    }
}

function appendToDisplay(value) {
    if (currentInput === '0' && value === '0') return;
    currentInput += value;
    display.textContent = currentInput;
}

function calculatePercentage() {
    try {
        currentInput = (parseFloat(currentInput) % 100).toString();
        display.textContent = currentInput;
    } catch (error) {
        display.textContent = 'Error';
        currentInput = '';
    }
}

function calculateResult() {
    try {
        display.textContent = eval(currentInput);
        currentInput = display.textContent;
    } catch (error) {
        display.textContent = 'Error';
        currentInput = '';
    }
}