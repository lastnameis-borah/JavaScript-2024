// Array

const arr = [1, 2, 3, 4, 5];

for (let i of arr) {
    console.log(i);
}

for (let i in arr) {
    console.log(arr[i]);
}

// Maps

// Duplicate not allowed
// Order is maintained

const map = new Map([
    ['a', 1],
    ['b', 2],
    ['c', 3]
]);

for (let i of map) {
    console.log(i);
}

// for in loop does not work with maps

const country_capital = new Map();
country_capital.set('India', 'New Delhi');
country_capital.set('USA', 'Washington DC');
country_capital.set('UK', 'London');

console.log(country_capital);

for (let [key, value] of country_capital) {
    console.log(`${key}: ${value}`);
}

// Objects

const obj = {
    a: 1,
    b: 2,
    c: 3
};

// for of loop does not work with objects

for (let i in obj) {
    console.log(obj[i]);
}