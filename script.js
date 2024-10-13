const display = document.getElementById('display');
let currentInput = '';
let operator = null;

// Function to update display
function updateDisplay() {
    display.textContent = currentInput || '0';  // If input is empty, show 0
}

// Function to clear the calculator
document.getElementById('clear').addEventListener('click', () => {
    currentInput = '';
    operator = null;
    updateDisplay();
});

// Function to delete the last character
document.getElementById('delete').addEventListener('click', () => {
    currentInput = currentInput.slice(0, -1);
    updateDisplay();
});

// Function to handle number and operator buttons
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;
        
        if (/[0-9.]/.test(value)) {  // If the button is a number or decimal point
            currentInput += value;
        } else if (value === '+' || value === '-' || value === '*' || value === '/') {
            if (currentInput === '' && display.textContent !== '0') {
                currentInput = display.textContent; // Handle when no first number is input
            }
            currentInput += value;
        }

        updateDisplay();
    });
});

// Function to perform calculation when = is pressed
document.getElementById('equal').addEventListener('click', () => {
    try {
        // Evaluate the expression using JavaScript's eval function
        currentInput = eval(currentInput).toString();  // Converts result to string
    } catch (e) {
        currentInput = 'Error';  // In case of an invalid expression
    }
    updateDisplay();
});
