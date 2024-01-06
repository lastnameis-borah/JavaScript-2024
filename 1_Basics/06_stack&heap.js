/*
Primitive data types are stored in stack memory.
*/

let name = 'John Doe'

let name1 = name

console.log(name, name1)    // --> John Doe John Doe

name1 = 'Jane Watson'

console.log(name, name1)    // --> John Doe Jane Watson

// It is name1 stores a copy of name. So, when we change name1, it doesn't affect name.


/*
Reference data types are stored in heap memory.
*/

let person = {
    name: 'John Doe',
    age: 25
}

let person1 = person

console.log(person, person1)    // --> { name: 'John Doe', age: 25 } { name: 'John Doe', age: 25 }

person1.name = 'Jane Watson'

console.log(person, person1)    // --> { name: 'Jane Watson', age: 25 } { name: 'Jane Watson', age: 25 }

// It is person1 stores a reference of person. So, when we change person1, it affects person as well.
