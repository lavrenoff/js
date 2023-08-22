"use strict";

console.log('5 задание');
const en = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
const ru = [
  "понедельник",
  "вторник",
  "среда",
  "четверг",
  "пятница",
  "суббота",
  "воскресенье",
];


const week = [];

for (let i = 0; i < en.length; i++) {
  week[en[i]] = ru[i];
}

console.log(week);


