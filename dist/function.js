"use strict";
// function
// normal function
function add1(num1, num2) {
    return num1 + num2;
}
console.log(add1(2, 3));
// arrow function
var add2 = function (num1, num2) { return num1 + num2; };
console.log(add2(2, 3));
// oject --> function --> method
var poorUser = {
    name: "Md Monjur Bakth Mazumder",
    balance: 0,
    addBalance: function (balance) {
        return " My new Balance is : ".concat(this.balance + balance);
    },
};
var arr = [1, 2, 3, 4, 5];
var newArray = arr.map(function (elem) { return elem * elem; });
console.log({ newArray: newArray });
