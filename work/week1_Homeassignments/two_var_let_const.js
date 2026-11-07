/*Assignment Details:
Declare a global variable and shadow it inside a function using both `var` and `let` to see how they behave
differently when printed */
//var
const browserVersion = 'chrome'

function getBrowserVersion() {
                                       //var browserVersion; --undefined local variable, outside the block  
    if(browserVersion === 'chrome') {  //undefined is not equal to chrome, so the if condition is false and the code inside the if block will not be executed
    var browserVersion = 'version 117' ; //var is function scoped, so it will be hoisted to the top of the function and will shadow the global variable
    }
    console.log(browserVersion); // output is undefined, because the function always consider the local variable first, variable shadowing is happening here, so the local variable is printed instead of the global variable 
    }
console.log(browserVersion); // output is chrome as this line is outside the function, hence global variable is printed

getBrowserVersion();

//let
const browserVersion1 = 'chrome'

function getBrowserVersion1() {
    if(browserVersion1 === 'chrome') {
let browserVersion1 = 'version 117' ;  //let is block scoped, so it will not be hoisted to the top of the function and will not shadow the global variable
}
console.log(browserVersion1); // chrome
}

getBrowserVersion1();
    