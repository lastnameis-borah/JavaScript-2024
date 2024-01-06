"use strict"; // Treats the code as newer version of JavaScript.

// JavaScript is dynamically typed language. So, you don't need to specify the datatype of a variable.
// TypeScript is statically typed language. So, you need to specify the datatype of a variable.


/*
Primitive Data Types // Call by value
*/

// 1.String
let name = 'John Doe'

// 2.Number
let age = 25

// 3.Boolean
let isEligible = true

// 4.Undefined
let address

// 5.Null
let phoneNumber = null

// 6.Symbol
let id = Symbol('id')
let id1 = Symbol('id')

console.log(id === id1); // --> false
// Symbol is a unique identifier. So, id and id1 are different even if they have same value.

// 7.BigInt
let bigNumber = 1234567890123456789012345678901234567890n
// You need to add n at the end of the number to make it a big Int.

console.table([name, age, isEligible, address, phoneNumber, id, bigNumber])

console.log([typeof name, typeof age, typeof isEligible, typeof address, typeof id, typeof bigNumber]);

/*
Reference Data Types // Call by reference

They all return object as their type.
*/

// Object
console.log(typeof phoneNumber) // --> object

let person = {
    name: 'John Doe',
    age: 25,
}

console.log(typeof person) // --> object


// Array
let numbers = [1, 2, 3, 4, 5]
console.log(typeof numbers) // --> object

// Function
function greet() {
    console.log('Hello World')
}

console.log(typeof greet)   // --> object function