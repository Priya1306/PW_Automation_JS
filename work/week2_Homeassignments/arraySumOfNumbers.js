/*Assignment Details:
Write a JavaScript program to find the total sum of all numbers present in an array.*/

let numbers = [1, 2, 3, 4, 5];
let sum=0;

for(i=0; i < numbers.length; i++){
    sum += numbers[i];
}
console.log("The total sum of all numbers in the array is: " + sum); // Output: 15  