// Falsy values

// 1. false
// 2. 0, -0
// 3. "", '', ``
// 4. null
// 5. undefined
// 6. NaN
// 7. BigINT
// 8. 0n



// Truthy values

// 1. true
// 2. Any number other than 0
// 3. "0", " ", "false", [], {}
// 4. function(){}
// 5. Infinity



// Nullish coalescing operator

let int;
int = 5 ?? 10

// if first value is null or undefined, it will take the second value



// Terinary operator

let isUser = true;

isUser ? console.log("You can view the content") : console.log("You can't view the content");