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