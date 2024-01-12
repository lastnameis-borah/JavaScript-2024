const user = {
    name: "John",
    message: function(){
        console.log(this)
        return `Welcome back ${this.name}`
    }
}

console.log(user.message())

user.name = "Paulina"

console.log(user.message())


// this in the file itself

console.log(this)       // --> {}

// But if we do this inside of chrome, we get the window object


// this inside a function()

function test(){
    let name = "John"
    console.log(this)
    console.log(this.name);     // --> undefined
}
test()


const test2 = function(){
    let name = "John"
    console.log(this)
    console.log(this.name);     // --> undefined
}
test2()

const test3 = () => {
    let name = "John"
    console.log(this)
    console.log(this.name);     // --> undefined
}
test3()


// Arrow functions

const addNums1 = (num1, num2) => {
    return num1 + num2;     // explicit arrow functions
}

addNums1(4, 5)

// Implicit arrow functions

const addNums2 = (num1, num2) => (num1 + num2)

addNums2(1, 3)

// OR more concise

const addNums3 = (num1, num2) => num1 + num2

addNums3(1, 3)

// But you can't return object this way as objects in itself has a curly brace