// for

for (let i = 0; i < 5; i++) {
  console.log(i);
}


// Loop inside a loop
for (let i = 0; i < 5; i++) {
  console.log(i);
  for (let j = 0; j < 5; j++) {
    console.log(j);
  }
} 


// Break statement

for (let i = 0; i < 5; i++) {
    if (i === 3) {
        break;
    }
    console.log(i);
}


// Continue statement

for (let i = 0; i < 5; i++) {
    if (i === 3) {
        continue;
    }
    console.log(i);
}