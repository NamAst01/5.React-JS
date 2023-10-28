// var x = 100 ; 

// var y : number ; 
// y = 100 ; 

// function total(a : number, b : number):number{
//     return a + b ;
// }
// console.log(total(3,5));

// function total23(a : number, b : number, c?: number): number{
//     return c? (a+b+c) : (a+b) ;
// }
// console.log(total23(3,5));
// console.log(total23(3,5,6)) ; 

import {a,b,login,
     loginWithCallback,
     showResult} from './callback' ; 

//a(b) ;

// login('nam','123abc');
loginWithCallback('nam','123abc',showResult) ;