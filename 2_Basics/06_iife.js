// Immediately Invoked Function Expression (IIFE)

// It's used to get rid of the global scope pollution

(function hello() {
    // named IFFE
    console.log('Hello')
})();   // --> The semi colon needs to be aadded to the end of the function to let the compiler know that the function is over (IIFE exclusive case)

((name) => {console.log('Hello ' + name)})("John")