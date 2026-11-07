//string literal- assign value to variable
let str1="Hello World";//same memory location
let str2='Hello World';//same memory location
let str3='Welcome to JS';//different memory location
console.log(str1===str2); //true
console.log(str1===str3); //false

//string object- compare reference of object
let str4=new String("Hello World");//different memory location
console.log(str1===str4); //false

//concatination of string
let str5="Hello"
let str6="World"
console.log(str5+str6) //HelloWorld
console.log(str5+" "+str6) //Hello World    
console.log(str5.concat(" "+str6)) //Hello World

/*template literal is a modern way of writing string in JS. 
 It is enclosed in backticks(``) and can contain placeholders 
 for variables or expressions, which are denoted by 
${expression}.*/
let x=10
let output = `The are ${x} testcases to be executed`
console.log(output) //The are 10 testcases to be executed

let name="John"
let time="10:00 AM"
console.log("User " + name + " has logged in at " + time)
console.log(`User ${name} has logged in at ${time}`)