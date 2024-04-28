function calculateArea() {
    // Get the values of base and height from the form
    var base = parseFloat(document.getElementById('base').value);
    var height = parseFloat(document.getElementById('height').value);

    // Check if the values are valid numbers
    if (isNaN(base) || isNaN(height)) {
        alert("Please enter valid numbers for base and height.");
        return;
    }

    // Calculate the area of the triangle
    var area = 0.5 * base * height;

    // Display the result
    document.getElementById('result').innerHTML = "The area of the triangle is: " + area;
}