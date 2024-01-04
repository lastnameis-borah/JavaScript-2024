/*

To number conversion

*/

let score = "100"
console.log(typeof score);

score = Number(score)
console.log(typeof score);

// But if you try to convert a string that is not a number, it will give NaN (Not a Number)
// For example:

let result = Number('hello')
console.log(typeof result);
console.log(result);

// If you convert null to a number, it will give 0.

let result1 = Number(null)
console.log(typeof result1);
console.log(result1);

// If you convert undefined to a number, it will give NaN.

let result2 = Number(undefined)
console.log(typeof result2);
console.log(result2);

// If you convert a boolean to a number, it will give 1 for true and 0 for false.

let result3 = Number(true)
console.log(typeof result3);
console.log(result3);



/*

To boolean conversion

*/

let loggedIn = 1
console.log(typeof loggedIn);

loggedIn = Boolean(loggedIn)
console.log(typeof loggedIn);
console.log(loggedIn);

// If you convert string to a boolean, it will give true.

let loggedIn1 = Boolean('hello')
console.log(typeof loggedIn1);
console.log(loggedIn1);

// If you convert empty string to a boolean, it will give false.

let loggedIn2 = Boolean('')
console.log(typeof loggedIn2);
console.log(loggedIn2);

// If you convert null to a boolean, it will give false.

let loggedIn3 = Boolean(null)
console.log(typeof loggedIn3);
console.log(loggedIn3);

// If you convert undefined to a boolean, it will give false.

let loggedIn4 = Boolean(undefined)
console.log(typeof loggedIn4);
console.log(loggedIn4);



/*

To string conversion

*/

let num = 100
console.log(typeof num);

num = String(num)
console.log(typeof num);
console.log(num);