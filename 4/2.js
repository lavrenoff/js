"use strict";

console.log("2 задание");
const arr = [1, 2, 3, 4, 5, 6, 7];
const arr2 = arr.slice(0, 2);
const arr3 = arr.slice(arr.length - 2, arr.length);
arr2.push(100);
arr2.push(arr3[0]);
arr2.push(arr3[1]);

console.log(arr2);
