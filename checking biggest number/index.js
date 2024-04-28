// Function to find the greatest of three numbers
function findGreatest() {
    // Prompt the user for three numbers
    var num1 = parseFloat(prompt("Enter the first number:"));
    var num2 = parseFloat(prompt("Enter the second number:"));
    var num3 = parseFloat(prompt("Enter the third number:"));

    // Check if the values are valid numbers
    if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
        alert("Please enter valid numbers.");
        return;
    }

    // Find the greatest number
    var greatest = Math.max(num1, num2, num3);

    // Display the result
    alert("The greatest number is: " + greatest);
}

// Call the findGreatest function when the page loads
findGreatest();