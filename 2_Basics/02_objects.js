// Singleton

const user = new Object() // Constructor method

// const user = {} // Literal method

console.log(user);


// Object literal

const mySym = Symbol(123)

const User = {
    name: "John Doe",
    "user age": 25,
    email: "jd@gmail.com",
    hobbies: ["music", "sports"],
    [mySym]: 123,   // Symbol as a key. // mySym = Symbol(123), here mySym is a string which is storing a symbol
    address: {
        city: "Mumbai",
        state: "Maharashtra"
    }
}    

// Key is always a string.

console.log(User.email);

// console.log(User.user age);  // Dot notation doesn't work when the key contains spaces.

console.log(User["user age"]); // When the key contains spaces, we have to use square brackets.

console.log(User[mySym]); // When the key is a symbol, we have to use square brackets.


// Changing the value of a property

User.email = "jd@outlook.com"

console.log(User.email);


// Adding a function

User.greet = function() {
    console.log(`Hello, ${this.name}`);
}

console.log(User.greet());


// ? 

console.log(User.address?.city);
// If address exists, then only access city otherwise return undefined. 


// Freezing an object

Object.freeze(User)

User.email = "jd@yahoo.com"

console.log(User.email);

console.log(User);


// Getting all the keys

console.log(Object.keys(User));


// Getting all the values

console.log(Object.values(User));


// Getting all the entries

console.log(Object.entries(User));  // Returns an array of arrays containing key-value pair.


// Checking if a key exists

console.log(User.hasOwnProperty("name")); // --> Returns true if the key exists.


// Adding two objects

const obj1 = {
    1: "a",
    2: "b"
}

const obj2 = {
    3: "c",
    4: "d"
}

let obj3 = {obj1, obj2}
console.log(obj3);  // Object inside an object

obj3 = {...obj1, ...obj2}
console.log(obj3);  // Merging two objects

// OR

obj3 = Object.assign({}, obj1, obj2)    // Object.assign(target, source1, source2, ...) // Add {} if target object can't be mutated.
console.log(obj3);
console.log(obj3 == obj1)  // False

obj3 = Object.assign(obj1, obj2)        // i.e. obj2 is merged into obj1
console.log(obj3 == obj1); // True



// Object destructuring

const {name, email, hobbies: hobs} = User

console.log(name, email, hobs);


// Object destructuring with functions

function Object({name, email, hobbies}) {
    console.log(name, email, hobbies);
}
Object(User)