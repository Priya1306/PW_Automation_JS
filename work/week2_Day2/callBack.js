/*callback function is a function that is passed as an 
argument to another function and is executed after some 
operation has been completed. It allows for asynchronous 
programming and helps in handling tasks that take time to 
complete, such as API calls or reading files.*/

function login(callback, callback1){
    console.log("User logged in");
    callback();
    callback1();
}
function username(){
    console.log('enter username');
    //callback1();
}
function password(){
    console.log('enter password');
}

login(() => {
    username()     
    }, () => {
        password();
});
