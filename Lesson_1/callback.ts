/*
    CALLBACK FUNCTION 
*/
function a (calllback) {
    console.log('this is a higher-order function')
    let x = 10 ; 
    //calllback(x) ; 

    console.log('Function running..')
    setTimeout(
        function(){
            console.log('HOF finished.')
        }, 2000
    ) ;
    calllback(x) ; 
}

function b (number : number) {
    console.log('Number recived from HOF') ;
    console.log(number) ;
}
function login(username : string , password : string){
    console.log("Please login with username")
    setTimeout(
        function(){
            if(username === 'nam' && password === '123abc'){
                console.log('valid')
            }else{
                console.log('invalid')
            }
        },5000
    )
    console.log("login successfully");
    console.log("login")
}

function loginWithCallback(username : string , password : string,callback){
    console.log("Please login with username")
    setTimeout(
        function(){
            let message = '';
            if(username === 'nam' && password === '123abc'){
                message = 'login successfully' ;
                callback('success',message,username);
            }else{
                message = 'failed' ;
               callback('failed',message) ;
            }
        },5000
    )
    
}
function showResult (status: string, message : string, username?: string) {
    if (status === 'success')
    {
        console.log('Wellcome' + username) ;
    }
    else
    {
        console.log(message);
    }
}
//a(b) ; 

export {
    a,b,login,
    loginWithCallback,
    showResult
}