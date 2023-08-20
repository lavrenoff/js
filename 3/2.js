"use strict";

const num = prompt("Задание 2 - Введите число", 0);
const zarplata = (number) => number - number * 0.13;

console.log("Задание 2");

if (num < 10000) console.log("Значение задано неверно");
else console.log(zarplata(num));
