"use strict";

console.log('4 задание');
const products = [
  {
    id: 3,
    price: 127,
    photos: ["1.jpg", "2.jpg"],
  },
  {
    id: 5,
    price: 499,
    photos: [],
  },
  {
    id: 10,
    price: 26,
    photos: ["3.jpg"],
  },
  {
    id: 8,
    price: 78,
  },
];

// пункт 1
const img = products.filter(item => item.photos?.length);
console.log(img);

// пункт 2
const sort = products.sort((x1, x2) => x1.price - x2.price);
console.log(sort);


