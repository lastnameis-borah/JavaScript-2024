function addNums(num1, num2) {
    return num1 + num2;
}

console.log(addNums(5, 4));

function loginMessage(username) {
    return `Welcome back ${username}`;
}

console.log(loginMessage());    // --> 'Welcome back undefined', because no argument is passed.


function loginMessage2(username) {
    if (!username) {    // (!username) is same as (username === undefined)
        console.log("Please enter a username");
        return
    }
    return `Welcome back ${username}`;
}

console.log(loginMessage2());


// Default parameters

function loginMessage3(username = "Anonymous") {
    return `Welcome back ${username}`;
}

console.log(loginMessage3());


// Arrow functions

const addNums2 = (num1, num2) => {
    return num1 + num2;
}


// Rest operator

function addNums3(...nums) {
    console.log(nums);
}

addNums3(1, 2, 3, 4, 5);


// Functions with objects

const user = {
    name: "John Doe",
    email: "jd@email.com"
}

function handleObject(userObject) {
    console.log(userObject.name, userObject.email);
}

handleObject(user)


// Functions with arrays

function handleArray(arr) {
    return arr[1]
} 

const numArr = [200, 400, 100, 600]

console.log(handleArray(numArr))