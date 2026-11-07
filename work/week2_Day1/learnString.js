let course ='Playwright'

console.log(`The length of the string is ${course.length}`);
console.log("the char at 3rd place is "+course.charAt(3));
console.log(`the index of w is ${course.indexOf('w')}`)
console.log(course.indexOf('w',0))

console.log(`the index of 'a' is ${course.indexOf('ywright')}`)
//line 8 returns the index of first char which is 
// 'y' in the string 'Playwright' which is 3.
console.log('slice method is used to extract a part of the string and returns a new string. It takes two parameters, start index and end index (end index is optional). The original string remains unchanged. It will not include the character at the end index.')
/*slice method is used to extract a part of the string 
// and returns a new string. It takes two parameters, 
// start index and end index (end index is optional). 
The original string remains unchanged. It will not include the
character at the end index.*/
console.log(`the slice of the string is ${course.slice(0,4)}`) //Play
console.log(`the slice of the string is ${course.slice(4)}`) //wright
/*if start index is greater than end index, it returns an 
empty string */
console.log(`the slice of the string is ${course.slice(5,4)}`)
/*negative index in slice means search from the end of 
the string
p   l   a   y   w   r   i   g   h   t
0   1   2   3   4   5   6   7   8   9  normal index    
p   l   a   y   w   r   i   g   h   t
-10 -9 -8  -7  -6  -5  -4   -3  -2  -1  negative index*/
 console.log(`the slice of the string is ${course.slice(4,-2)}`)

 //substring
 console.log('substring method is similar to slice method but it does not accept negative index. If start index is greater than end index, it swaps the two indexes.')
 console.log(`the substring of the string is ${course.substring(0,4)}`) //Play
 console.log(`the substring of the string is ${course.substring(4)}`) //wright
 console.log(`the substring of the string is ${course.substring(5,4)}`) //w
 console.log(`the substring of the string is ${course.substring(4,-2)}`) //Play
 /*course.substring(4,-2)---substring treates negative as zero
 so it is (4,0)
 if start >end, it swaps the two indexes so it becomes (0,4) 
 and returns Play
 */

 //reverse string
 console.log('reverse string')
 let str = 'Playwright'
 console.log(str.split('')) //['P', 'l', 'a', 'y', 'w', 'r', 'i', 'g', 'h', 't']
 let reversedStr = str.split('').reverse().join('')
 console.log(`the reversed string is ${reversedStr}`) //thgirwyalP