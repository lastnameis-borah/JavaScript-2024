let myDate = new Date()

// console.log(myDate);

// console.log(typeof myDate); // --> object

// console.log(myDate.toString()); // --> Thu Jul 01 2021 12:00:00 GMT+0530 (India Standard Time)

// console.log(myDate.toDateString()); // --> Thu Jul 01 2021

// console.log(myDate.toTimeString()); // --> 12:00:00 GMT+0530 (India Standard Time)

// console.log(myDate.toLocaleString());   // --> 7/1/2021, 12:00:00 PM (Short of toString())

// console.log(myDate.toLocaleDateString());    // --> 7/1/2021

// console.log(myDate.toLocaleTimeString());    // --> 12:00:00 PM

// console.log(myDate.getFullYear());  // --> 2021

// console.log(myDate.getMonth()); // --> 6 (0-11) (Jan-Dec)

// console.log(myDate.getDate());  // --> 1

// console.log(myDate.getDay());   // --> 4 (0-6) (Sun-Sat)

// console.log(myDate.getHours());

// console.log(myDate.getMinutes());  

// console.log(myDate.getSeconds());

// console.log(myDate.getMilliseconds());

// console.log(myDate.getTime()); // --> 1625135400000 (Milliseconds from 1 Jan 1970) (To get the time at which the date object was created)

// console.log(myDate.getTimezoneOffset());    // --> -330 (Minutes from UTC)

// console.log(myDate.getUTCDate());   // --> Date at UTC 00:00:00

// console.log(myDate.getUTCDay());    // --> Day at UTC 00:00:00

// console.log(myDate.getUTCFullYear());   // --> Year at UTC 00:00:00

// console.log(myDate.getUTCHours());  // --> Hours at UTC 00:00:00

// console.log(myDate.getUTCMilliseconds());   // --> Milliseconds at UTC 00:00:00

// console.log(myDate.getUTCMinutes());    // --> Minutes at UTC 00:00:00

// console.log(myDate.getUTCMonth());  // --> Month at UTC 00:00:00

// console.log(myDate.getUTCSeconds());    // --> Seconds at UTC 00:00:00

// console.log(myDate.toUTCString());  // --> Thu, 01 Jul 2021 06:30:00 GMT

console.log(myDate.toISOString());  // --> 2021-07-01T06:30:00.000Z

// console.log(myDate.toJSON());   // --> 2021-07-01T06:30:00.000Z

// console.log(Date.now());    // --> To get the current time in milliseconds.


let myDate1 = new Date('2024-01-01')

console.log(myDate1.toLocaleString());

let myDate2 = new Date(2024, 0, 1, 12, 30, 30, 30)

console.log(myDate2.toLocaleString());

console.log(myDate2.getTime());