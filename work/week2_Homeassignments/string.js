/*Assignment Details:
Given a string s consisting of words and spaces, return the length of the last word in the string.*/

let str = "Hello World  "; // Example input string
str=str.trim(); // Removes leading and trailing spaces
let arr = str.split(" "); // Splits the string into an array of words
console.log(arr)
console.log('The length of the last word in the string is: ' + arr[arr.length - 1].length); // Returns the length of the last word in the string


/*Write a function to check if two strings are anagrams.*/

function areAnagrams(str1, str2) {
    // Remove spaces and convert to lowercase for accurate comparison
    str1 = str1.replace(/\s+/g, '').toLowerCase();
    str2 = str2.replace(/\s+/g, '').toLowerCase();
    if(str1.length === str2.length) {
        let sortedStr1 = str1.split('').sort().join('');
        let sortedStr2 = str2.split('').sort().join('');
        console.log(sortedStr1 === sortedStr2);
    }
    else{
        console.log(false);
    }
}
areAnagrams("listen", "silent"); // Returns true
areAnagrams("hello", "world"); // Returns false