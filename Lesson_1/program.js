"use strict";
// var x = 100 ; 
Object.defineProperty(exports, "__esModule", { value: true });
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
var callback_1 = require("./callback");
//a(b) ;
// login('nam','123abc');
(0, callback_1.loginWithCallback)('nam', '123abc', callback_1.showResult);
