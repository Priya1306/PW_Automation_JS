/*Assignment Details:
Create a JavaScript function that determines if a number is positive, negative, or zero and returns a
corresponding string indicating the type. */

function checkNumberType(num) {
    if (num > 0) { 
        console.log("Positive");
    } else if (num < 0) {
        console.log("Negative");
    } else {
        console.log("Zero");
    }
}
checkNumberType(5); // Positive
checkNumberType(-3); // Negative
checkNumberType(0); // Zero