/*arrays is a collection of similar data types and 
heterogeneous data types. It is a data structure that can hold 
more than one value at a time.It is a non primitive data type*/
let fruits = ['apple', 'banana', 'orange', 'grapes'];
let mixed = ['apple', 1, true, null, undefined, {name: 'John'}]

console.log(fruits)
console.log(fruits[3])
console.log(fruits.push('mango','kiwi'))
 //adds an element to the end of the array and 
 // returns the new length of the array
console.log("the new array is "+ fruits)
console.log(fruits.pop()) 
//removes the last element from the array 
// and returns that element

console.log("The length of the array is: " + fruits.length)

//unshift() method adds an element to the beginning of 
// the array and returns the new length of the array
console.log(fruits.unshift('strawberry'))
console.log("The array after unshift is: " + fruits)

//shift() method removes the first element from the array
// and returns that element
console.log(fruits.shift())
console.log("The array after shift is: " + fruits)

/*slice method is used to extract a part of the array and 
 returns a new array. It takes two parameters,
 start index and end index (end index is optional). 
 The original array remains unchanged. 
 It will not include the element at the end index.
 if start is greater than end, it returns an empty array.*/
console.log("The slice of the array is: " + fruits.slice(1,3))
console.log("The slice of the array is: " + fruits.slice(2))
console.log("The slice of the array is: " + fruits.slice(3,2))
//if slice method is called without any parameters, it returns 
//   a shallow copy of the array.
console.log(fruits.slice())

//splice method is used to add or remove elements from the array.
// It takes three parameters, start index, number of elements to 
// remove and elements to add. The original array is modified.
let veg =['carrot','potato','tomato','onion']
console.log("The splice of the array is: " + veg.splice(0,0,'cauliflower'))
console.log("The array after splice is: " + veg)// ['cauliflower', 'carrot', 'potato', 'tomato', 'onion']
let test= veg.splice(1,2,'cabbage','beetroot')
console.log("The array after splice is: " + veg)// ['cauliflower', 'cabbage', 'beetroot', 'tomato', 'onion']
console.log("The removed elements are: " + test) //['carrot', 'potato']

//sort method is used to sort the elements of the array in
// ascending order. It modifies the original array.
console.log('sort')
let numbers = [5, 2, 9, 1, 5, 6];
console.log(numbers)
console.log(numbers.includes(5)) //true
console.log(numbers.includes(10)) //false
//console.log("The sorted array is: " + numbers.sort()) // [1, 2, 5, 5, 6, 9] 
console.log("The sorted array is: " + numbers.sort ((a, b) => a - b)) // [1, 2, 5, 5, 6, 9]

console.log(numbers.join(' ')) // 1 2 5 5 6 9

/*map method is used to create a new array by 
applying a function to each element of the original array. 
It does not modify the original array.*/
let doubledNumbers = numbers.map((num) => num * 2); 
console.log("The doubled numbers are: " + doubledNumbers) // [2, 4, 10, 10, 12, 18] 