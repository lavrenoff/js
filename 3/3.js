"use strict";

const N1 = Number(prompt("Задание 3 - Введите 1 число", 0));
const N2 = Number(prompt("Задание 3 - Введите 2 число", 0));
const N3 = Number(prompt("Задание 3 - Введите 3 число", 0));

const Max = (N1, N2, N3) => {
    if (N1 > N2) {
        if (N1 > N3) return N1;
        else if (N3 > N2) return N3;
    } else if (N2 > N3) return N2;
    else return N3;
};

console.log("Задание 3");
console.log(Max(N1, N2, N3));
