let num = 100

let num1 = new Number(100)

console.log(num1.toFixed(2))    // --> 100.00

let num2  = 23.896

console.log(num2.toFixed(2))    // --> 23.9
// Total decimal places will be 2. So, it will round off to 23.9

console.log(num2.toPrecision(2))    // --> 24
// Total digits will be 2. It starts from the beginning of the number. So, it will round off to 24

let num3 = 1000000000
console.log(num3.toLocaleString('en-UK')) 

// Math Object

console.log(Math.PI)    // --> 3.141592653589793
console.log(Math.E)    // --> 2.718281828459045
console.log(Math.round(2.4))    // --> 2
console.log(Math.ceil(2.4))    // --> 3
console.log(Math.floor(2.4))    // --> 2
console.log(Math.abs(-2.4))    // --> 2.4
console.log(Math.pow(2, 3))    // --> 8
console.log(Math.sqrt(64))    // --> 8
console.log(Math.min(1, 2, 3, 4, 5))    // --> 1
console.log(Math.max(1, 2, 3, 4, 5))    // --> 5
console.log(Math.random())    // --> A value between 0-1