"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.showResult = exports.loginWithCallback = exports.login = exports.b = exports.a = void 0;
/*
    CALLBACK FUNCTION
*/
function a(calllback) {
    console.log('this is a higher-order function');
    var x = 10;
    //calllback(x) ; 
    console.log('Function running..');
    setTimeout(function () {
        console.log('HOF finished.');
    }, 2000);
    calllback(x);
}
exports.a = a;
function b(number) {
    console.log('Number recived from HOF');
    console.log(number);
}
exports.b = b;
function login(username, password) {
    console.log("Please login with username");
    setTimeout(function () {
        if (username === 'nam' && password === '123abc') {
            console.log('valid');
        }
        else {
            console.log('invalid');
        }
    }, 5000);
    console.log("login successfully");
    console.log("login");
}
exports.login = login;
function loginWithCallback(username, password, callback) {
    console.log("Please login with username");
    setTimeout(function () {
        var message = '';
        if (username === 'nam' && password === '123abc') {
            message = 'login successfully';
            callback('success', message, username);
        }
        else {
            message = 'failed';
            callback('failed', message);
        }
    }, 5000);
}
exports.loginWithCallback = loginWithCallback;
function showResult(status, message, username) {
    if (status === 'success') {
        console.log('Wellcome' + username);
    }
    else {
        console.log(message);
    }
}
exports.showResult = showResult;
