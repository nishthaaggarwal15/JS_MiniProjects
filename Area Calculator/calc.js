    // Function to calculate the area of a triangle
    function calculateArea() {
        // Prompt the user for the base and height values
        var base = parseFloat(prompt("Enter the base of the triangle:"));
        var height = parseFloat(prompt("Enter the height of the triangle:"));

        // Check if the values are valid numbers
        if (isNaN(base) || isNaN(height)) {
            alert("Please enter valid numbers for base and height.");
            return;
        }

        // Calculate the area of the triangle
        var area = 0.5 * base * height;

        // Display the result
        alert("The area of the triangle is: " + area);
    }

    // Call the calculateArea function when the page loads
    calculateArea();