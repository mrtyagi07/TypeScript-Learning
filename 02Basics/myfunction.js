"use strict";
exports.__esModule = true;
function addTwo(num) {
    return num + 2;
    // return "hello";
}
addTwo(7);
function getUpper(val) {
    val.toUpperCase();
}
getUpper("vaibhav");
function signUp(name, email, isLoggedIn) {
    if (isLoggedIn === void 0) { isLoggedIn = false; }
}
signUp("vaibhav", "v07@gmail.com");
var loginUser = function login(email, password) { };
loginUser("v@07.com", "Ty111221");
function getValue(myVal) {
    if (myVal > 5) {
        return true;
    }
    return "200 OK";
}
//! ARROW FUNCTION
var getHello = function (s) {
    return "";
};
var heros = ["thor", "iromman", "superman"];
heros.map(function (hero) {
    return "Hero is ".concat(hero);
});
function consoleError(errMsg) {
    console.log(errMsg);
}
function handleError(errMsg) {
    throw new Error(errMsg);
}
