let a = 10
const b = 20
var c = 30      // Global scope

if (true) {
    var c = 300     // Block scope
    let a = 100
    const b = 200

    console.log(`Block c: ${c}`);      // --> 300
    console.log(`Block a: ${a}`)       // --> 100
    console.log(`Block b: ${b}`)
}

console.log(`Global c: ${c}`);     // --> 300

// If we use var, block scope can also be outside the block. So it is not a good practice to use var

console.log(`Global a: ${a}`)      // --> 10

console.log(`Global b: ${b}`)