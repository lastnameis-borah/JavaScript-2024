const accountId = 1234
let accountBalance = 1000
var accountName = 'John Doe'
// Don't use var anymore as it has global scope. So, if it's changed in one block, it will be changed everywhere.
accountCity = 'New York'
// You can declare a variable without using let or var. But it's not recommended to use.
let accountType
// Just declaring a variable without assigning a value to it will give undefined.

// accountId = 1212
// Can't perform as accountId is a constant

// console.log(accountId);

accountBalance = 2000
accountName = 'Jane Watson'
accountCity = 'London'

console.table([accountId, accountBalance, accountName, accountCity, accountType])