let str1 = "Hello"
let str2 = "World"

console.log(str1 + " " + str2) // --> Hello World

console.log(`${str1} ${str2}`) // --> Hello World

let str3 = new String("Hello World")
// Hard code str3 to be a string object.

console.log(str3) // --> [String: 'Hello World']

// Indexing
console.log(str3[0]) // --> W

// Length
console.log(str3.length) // --> 11

// Methods
console.log(str3.toUpperCase()) // --> HELLO WORLD

console.log(str3.toLowerCase()) // --> hello world

console.log(str3.indexOf('o')) // --> 4

console.log(str3.lastIndexOf('o')) // --> 7

console.log(str3.charAt(4)) // --> o

console.log(str3.endsWith('World')) // --> true

console.log(str3.includes('World')) // --> true

console.log(str3.substring(0, 7)) // --> Hello W

console.log(str3.slice(0, -6)) // --> Hello

// In slice, if you give negative value, it will count from the end. Substring doesn't support negative values.

console.log(str3.split(' ')) // --> [ 'Hello', 'World' ]

console.log(str3.replace(' ', '_')) // --> Hello_World

console.log(str3.trim()) // --> Hello World

// trimStart() and trimEnd() are also available.

console.log(str3.repeat(2)) // --> Hello WorldHello World

console.log(str3.concat(' ', 'Hello Universe')) // --> Hello World Hello Universe

