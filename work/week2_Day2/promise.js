/*promise it is a old way to handle asynchronous code 
in js, it is a object that represents the eventual 
completion or failure of an asynchronous operation 
and its resulting value.
in modern js we use async/await to handle promise*/
/* it has three states
1. pending: initial state, neither fulfilled nor rejected.
2. fulfilled: meaning that the operation completed successfully.
3. rejected: meaning that the operation failed.*/

let marks =90
/*let studentRecord = new Promise((resolve, reject) => {
    if(marks>=40){
        resolve("pass")
    }
    else{
        reject("fail")
    }   
})
console.log(studentRecord)

studentRecord.then(message => console.log(message))
.catch((message) => {console.log(message)})*/  

//async means this function will return a promise and 
// await means wait for the promise to resolve or 
// reject before moving on to the next line of code.

function getResult(){
    return new Promise((resolve, reject) => {
        if(marks>=40){
            resolve("above 40 is pass")
        }
        else{
            reject("below 40 is fail")
        }   
})
}

async function progress(){
    try{
        let result = await getResult()
        console.log(result)
    }
    catch(error){
        console.log(error)
    }   }
    progress()

