/*Assignment Details:
Write JavaScript programs using different array methods instead of loops*/

let arr = [1, 2, 3, 4, 5];

arr.push(6); // Adds 6 to the end of the array
console.log("pushed number " +arr); // Output: [1, 2, 3, 4, 5, 6]

arr.pop(); // Removes the last element from the array
console.log("popped number " +arr); // Output: [1, 2, 3, 4, 5]

arr.shift(); // Removes the first element from the array
console.log("shifted number " +arr); // Output: [2, 3, 4, 5]

arr.unshift(0); // Adds number to the beginning of the array
console.log("unshifted number " +arr); // Output: [0, 2, 3, 4, 5]

console.log("does array include 3: " +arr.includes(3)); // Output: true

console.log("index of 4: " +arr.indexOf(4)); // Returns the index of 4 in the array

arr.join(', '); // Joins the array elements into a string with ', ' as separator
console.log("joined string: " +arr); // Output: "0, 2, 3, 4, 5"

arr.reverse(); // Reverses the order of the array elements
console.log("reversed array: " +arr); // Output: ["5", "4", "3", "2", "0"]

arr.sort((a, b) => a - b); // Sorts the array in ascending order
console.log("sorted array in ascending order: " +arr); // Output: [0, 2, 3, 4, 5]
