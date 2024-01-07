const arr = [1, 2, 3, 4, 5, true, "Hii", [6, 7, 8]];

// console.log(arr[7][0]);

// console.log(arr.length);

// // Array methods

// console.log(arr.push(9)); // --> Adds an element at the end of the array.

// console.log(arr.pop()); // --> Removes the last element of the array.

// console.log(arr.unshift(0)); // --> Adds an element at the beginning of the array.

// console.log(arr.shift()); // --> Removes the first element of the array.

// console.log(arr.includes("Hii")); // --> Returns true if the element is present in the array.

// console.log(arr.indexOf(true)); // --> Returns the index of the element.

// console.log(arr.toString()); // --> Converts the array into a string.

// const newArr = arr.join("-");

// console.log(newArr); // --> Converts the array into a string.

// console.log(arr.slice(2, 5)); // --> Returns the elements from the start index to the end index.

// console.log(arr);

// console.log(arr.splice(2, 5)); // --> It includes both the start and end index. Removes the elements from the array and returns the removed elements. (Mutates the original array)

// console.log(arr);

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [6, 7, 8];

console.log(arr1.concat(arr2)); // --> Concatenates elements of two arrays.
// concat creates a new array. It doesn't mutate the original array.

// Spread operator
console.log([...arr1, ...arr2]);    // More preferable than concat.

arr1.push(arr2)
console.log(arr1); // --> Adds the array as an element.
// push mutates the original array.

console.log(arr.reverse()); // --> Reverses the array.

console.log(arr.sort()); // --> Sorts the array.

console.log(arr.flat());    // --> Flattens the array.

console.log(Array.isArray("Hey"));    // --> Returns true if the argument is an array.

console.log(Array.from("Hey"));    // --> Converts the argument into an array.

console.log(Array.from({name: "John"}));

let num1 = 100
let num2 = 200
let num3 = 300

console.log(Array.of(num1, num2, num3));