// Comparision operator

// <,>,<=,>=,==,===,!=,!==


if (2 == "2") { // value check
    console.log("This is true");
}

if (2 === "2") {    // value and type check
    console.log("This is true");
} else {
    console.log("This is false");
}

if (2 != "2") { // value check
    console.log("This is true");
} else {
    console.log("This is false");
}

if (2 !== "2") {    // value and type check
    console.log("This is true");
}


// Not a good practice
const balance = 1000
if (balance > 800) console.log("direct debit taken"), console.log("Remaining babance 200");



// && (and operator)
const loggedIn = true;
const isMember = true;
if (loggedIn && isMember) {
    console.log("You can view the content");
} 

// || (or operator)
const verified = true;
const hasPaymentToken = true;
const isGuest = true;
if (Verified || hasPaymentToken || isGuest) {
    console.log("You can view the content");
}


// ! (not operator)
const isVerified = true;
if (!isVerified) {
    console.log("You can't view the content");
}


// Ternary operator
const isUser = true;
isUser ? console.log("You can view the content") : console.log("You can't view the content"); 