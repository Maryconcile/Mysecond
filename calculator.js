// Function for addition
export function add(a, b) {
    return a + b;
}

// Function for subtraction
export function subtract(a, b) {
    return a - b;
}

// Function for multiplication
export function multiply(a, b) {
    return a * b;
}

// Function for division
export function divide(a, b) {
    if (b === 0) {
        return "Error: Cannot divide by zero";
    }

    return a / b;

}