/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add (number1, number2){
    return number1 + number2;
}

function addNumbers() {
    // Get the values of the HTML form controls
    let input1 = document.getElementById("add1").value;
    let input2 = document.getElementById("add2").value;

    // Convert the string values to numbers
    let number1 = parseFloat(input1);
    let number2 = parseFloat(input2);

    // Check if the conversion is successful
    if (!isNaN(number1) && !isNaN(number2)) {
        // Perform the addition
        let sum = number1 + number2;

        // Display the result or do something with it
        document.getElementById("sum").value = sum;
    } else {
        // Handle invalid input (non-numeric values)
        alert("Please enter valid numeric values for addition.");
    }
}

// Example of how to trigger the function (e.g., on button click)
document.getElementById("addNumbers").addEventListener("click", addNumbers);



/* Function Expression - Subtract Numbers */
function Subtract (number1, number2){
    return number1 - number2;
}

function SubtractNumbers() {
    // Get the values of the HTML form controls
    let input1 = document.getElementById("subtract1").value;
    let input2 = document.getElementById("subtract2").value;

    // Convert the string values to numbers
    let number1 = parseFloat(input1);
    let number2 = parseFloat(input2);

    // Check if the conversion is successful
    if (!isNaN(number1) && !isNaN(number2)) {
        // Perform the subtraction
        let difference = number1 - number2;

        // Display the result or do something with it
        document.getElementById("difference").value = difference;
    } else {
        // Handle invalid input (non-numeric values)
        alert("Please enter valid numeric values for subtraction.");
    }
}

// Example of how to trigger the function (e.g., on button click)
document.getElementById("subtractNumbers").addEventListener("click", SubtractNumbers);


/* Arrow Function - Multiply Numbers */
function multiplyNumbers() {
    // Get the values of the HTML form controls
    let input1 = document.getElementById("factor1").value;
    let input2 = document.getElementById("factor2").value;

    // Convert the string values to numbers
    let number1 = parseFloat(input1);
    let number2 = parseFloat(input2);

    // Check if the conversion is successful
    if (!isNaN(number1) && !isNaN(number2)) {
        // Perform the subtraction
        let product = number1 * number2;

        // Display the result or do something with it
        document.getElementById("product").value =  product;
    } else {
        // Handle invalid input (non-numeric values)
        alert("Please enter valid numeric values for multiplication.");
    }
}

// Example of how to trigger the function (e.g., on button click)
document.getElementById("multiplyNumbers").addEventListener("click", multiplyNumbers);


/* Open Function Use - Divide Numbers */
// Function declaration for division
function divide(dividend, divisor) {
    // Check for division by zero to avoid potential errors
    if (divisor !== 0) {
        return dividend / divisor;
    } else {
        // Handle division by zero
        throw new Error("Cannot divide by zero");
    }
}

// Function expression for divideNumbers
const divideNumbers = function() {
    // Get the values of the HTML form controls
    let inputDividend = document.getElementById("dividend").value;
    let inputDivisor = document.getElementById("divisor").value;

    // Convert the string values to numbers
    let dividend = parseFloat(inputDividend);
    let divisor = parseFloat(inputDivisor);

    // Check if the conversion is successful
    if (!isNaN(dividend) && !isNaN(divisor)) {
        try {
            // Perform the division
            let quotient = divide(dividend, divisor);

            // Display the result or do something with it
            document.getElementById("quotient").value = quotient;
        } catch (error) {
            // Handle division by zero error
            alert(error.message);
        }
    } else {
        // Handle invalid input (non-numeric values)
        alert("Please enter valid numeric values for division.");
    }
};

// Example of how to trigger the divideNumbers function (e.g., on button click)
document.getElementById("divideNumbers").addEventListener("click", divideNumbers);



/* Decision Structure */
function getTotalDue() {
    // Get the value of the HTML subtotal field
    let inputSubtotal = document.getElementById("subtotal").value;

    // Convert the string value to a number
    let subtotal = parseFloat(inputSubtotal);

    // Check if the conversion is successful (input validation)
    if (!isNaN(subtotal)) {
        // Check if the membership checkbox is checked
        let isMember = document.getElementById("member").checked;

        // Apply a 20% discount if the user is a member
        if (isMember) {
            subtotal *= 0.8; // 20% discount
        }

        // Perform any additional calculation if needed
        let totalDue = subtotal;

        // Display the result or do something with it
        document.getElementById("total").textContent = `$${totalDue.toFixed(2)}`;
    } else {
        // Handle invalid input (non-numeric values)
        alert("Please enter a valid numeric amount for the subtotal.");
    }
}

// Example of how to trigger the getTotalDue function (e.g., on button click)
document.getElementById("getTotal").addEventListener("click", getTotalDue);


/* ARRAY METHODS - Functional Programming */
// Declare and instantiate an array variable with numbers 1 through 13
const numbersArray = Array.from({ length: 13 }, (_, index) => index + 1);

// Output the array to console for verification
console.log(numbersArray);

/* Output Source Array */
// Assign the value of the array variable to the HTML element with ID "array"
document.getElementById("array").textContent = numbersArray.join(", ");


/* Output Odds Only Array */
// Use filter() to find all odd numbers
const oddNumbers = numbersArray.filter(number => number % 2 === 1);

// Output the odd numbers to console for verification
console.log(oddNumbers);

// Assign the result to the HTML element with ID "odds"
document.getElementById("odds").textContent = oddNumbers.join(", ");


/* Output Evens Only Array */
// Use filter() to find all even numbers
const evenNumbers = numbersArray.filter(number => number % 2 === 0);

// Output the even numbers to console for verification
console.log(evenNumbers);

// Assign the result to the HTML element with ID "evens"
document.getElementById("evens").textContent = evenNumbers.join(", ");


/* Output Sum of Org. Array */
// Use reduce() to sum the array elements
const sumOfArray = numbersArray.reduce((sum, number) => sum + number, 0);

// Output the sum to console for verification
console.log(sumOfArray);

// Assign the result to the HTML element with ID "sumOfArray"
document.getElementById("sumOfArray").textContent = sumOfArray;


/* Output Multiplied by 2 Array */
// Use map() to multiply each element in the array by 2
const multipliedArray = numbersArray.map(number => number * 2);

// Output the multiplied array to console for verification
console.log(multipliedArray);

// Assign the result to the HTML element with ID "multiplied"
document.getElementById("multiplied").textContent = multipliedArray.join(", ");


/* Output Sum of Multiplied by 2 Array */
// Use map() to multiply each element in the array by 2
const aftermultipliedArray = numbersArray.map(number => number * 2);

// Output the multiplied array to console for verification
console.log(multipliedArray);

// Use reduce() to sum the multiplied array elements
const sumOfMultiplied = multipliedArray.reduce((sum, number) => sum + number, 0);

// Output the sum to console for verification
console.log(sumOfMultiplied);

// Assign the result to the HTML element with ID "sumOfMultiplied"
document.getElementById("sumOfMultiplied").textContent = sumOfMultiplied;

