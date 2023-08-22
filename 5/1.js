"use strict";

console.log("1 задание");
const numbers = {
  key1: 12,
  key2: 2,
  key3: 4,
  key4: 3,
  key5: -244,
  key6: 0,
  key7: 3,
};

for (const item in numbers) {
  if (numbers[item] >= 3) {
    console.log(numbers[item]);
  }
}
