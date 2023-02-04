"use strict";
const socres = [];
const names = [];
function identity1(val) {
    return val;
}
function identity2(val) {
    return val;
}
function identity3(val) {
    return val;
}
function identity4(val) {
    return val;
}
function identity5(user) {
    console.log(user);
    return user;
}
identity5({ name: "vaibhav", email: "v@ibhav07" });
function getSearchProduct(products) {
    //DB Operations
    const myIndex = 3;
    return products[myIndex];
}
//! ARROW
const getSearchProduct1 = (products) => {
    //DB Operations
    const myIndex = 3;
    return products[1];
};
function anotherFunction(valOne, valTwo) {
    return {
        valOne,
        valTwo,
    };
}
anotherFunction(7, { connection: "db1", userName: "", password: "" });
class Sellable {
    constructor() {
        this.cart = [];
    }
    addToCart(item) {
        this.cart.push(item);
    }
}
