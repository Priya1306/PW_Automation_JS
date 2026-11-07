/*Assignment Details:
Create a JavaScript function that accepts a string, reverses it, and checks if the reversed string is a
palindrome, then test your function with various strings and print the results.*/

function isPalindrome(str) {
    // Reverse the string
    let reversed = str.split('').reverse().join('');
    
    if(str===reversed){
        console.log("The string is a palindrome");
    }
    else{
        console.log("The string is not a palindrome");
    }
}

// Test the function with various strings
isPalindrome("race a car"); // The string is not a palindrome
isPalindrome("hello"); // The string is not a palindrome
isPalindrome("madam"); // The string is a palindrome