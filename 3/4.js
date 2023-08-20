"use strict";

const sum = (num1, num2) => num1 + num2;
const raz = (num1, num2) => {
    if (num1 - num2 <= 0) return 0;
    else return num1 - num2;
};

const ymn = (num1, num2) => num1 * num2;
const del = (num1, num2) => num1 / num2;

console.log("Задание 4");
console.log(sum(2, 6));
console.log(raz(2, 6));
console.log(ymn(2, 6));
console.log(del(2, 6));
