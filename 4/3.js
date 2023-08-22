console.log("3 задание");

function getRandomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const massiv = [];
const find3_massiv = [];

let sum = 0;

for (let i = 0; i < 5; i++) {
    const rnd = getRandomNumber(0, 9);
    sum = sum + rnd;
    massiv.push(rnd);
    if (rnd === 3) find3_massiv.push(i);
}

console.log(massiv);

const min = Math.min(...massiv);
console.log(`Сумма элементов ${sum}`);
console.log(`Минимальное значение ${min}`);

console.log(find3_massiv);
