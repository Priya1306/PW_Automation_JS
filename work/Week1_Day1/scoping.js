//global scope
const name = 'Adam'

function display(){
    console.log(name)
}
display()
console.log(name)   

//function scope
function showName(){
    const name2 = 'Eve'
    console.log(name2)
}
showName()
//console.log(name2)// throws ref error as name2 is not defined in global scope

//block scope
if (true){
    const name3 = 'John'
    console.log(name3)
}
console.log(name3) // throws ref error as name3 is not defined in global scope