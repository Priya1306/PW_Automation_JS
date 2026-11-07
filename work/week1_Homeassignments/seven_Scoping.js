/*## *Assignment Details:*
Write a JavaScript program to observe how the same variable name behaves:
* in *global scope*,
* inside a *function*, and
* inside an *if-block* using both var and let*/ 

genderType = 'male'; // Global scope variable

function printGender() {
                          //var age;
    let color ='Brown'; // Function scope variable

    if(genderType === 'Female') {
        var age = 30; // Block scope variable using var, also var is func scoped, so it is hoisted on top, since male not equal to female, if block is not executed hence age is undefined
        let color ='pink'; // Block scope variable using let
        console.log('Inside if-block: ', color); // Output: pink
    }
    console.log('Inside function: ', age); // Output: 30 only if global scope variable is female
    console.log('Inside function: ', color); // Output: Brown
}
printGender();
console.log('Global scope: ', genderType); // Output: male