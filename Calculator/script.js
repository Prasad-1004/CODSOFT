let currentInput = ''; // Holds the current input displayed on screen
let previousInput = ''; // Holds the previous number for calculations
let operator = null; // Holds the selected operator

// Function to append numbers to the display
function appendNumber(number) {
    currentInput += number;
    updateDisplay();
}

// Function to set the operator
function setOperator(op) {
    if (currentInput === '') return; // Don't set operator if there's no input
    if (previousInput !== '') {
        calculateResult(); // Calculate previous result if needed
    }
    operator = op;
    previousInput = currentInput;
    currentInput = '';
}

// Function to clear the display
function clearDisplay() {
    currentInput = '';
    previousInput = '';
    operator = null;
    updateDisplay();
}

// Function to calculate the result
function calculateResult() {
    if (currentInput === '' || previousInput === '') return;
    let result;
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);

    switch (operator) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            if (current === 0) {
                result = 'Error';
            } else {
                result = prev / current;
            }
            break;
        default:
            return;
    }

    currentInput = result.toString();
    operator = null;
    previousInput = '';
    updateDisplay();
}

// Function to update the display with the current input
function updateDisplay() {
    document.getElementById('display').value = currentInput;
}
