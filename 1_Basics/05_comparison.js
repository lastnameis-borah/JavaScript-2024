console.log("2" >1) // true
console.log("02" > 1) // true

console.log(null > 0) // false
console.log(null == 0) // false
console.log(null >= 0) // true

/* 
    This is because of the following reason:
    1. null is converted to 0 in null > 0 (comparison operations)
    2. null is not converted to 0 in null == 0 (equality operations)
    3. null is converted to 0 in null >= 0 (comparison operations)
*/

console.log(undefined > 0) // false
console.log(undefined == 0) // false
console.log(undefined >= 0) // false

console.log("0" == 0) // true
console.log("0" === 0) // false

// Strict equality operator (===) doesn't do type conversion. So, it will give false.