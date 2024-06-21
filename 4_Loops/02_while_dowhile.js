// while loop

let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}

let arr = [1, 2, 3, 4, 5];

let num = 0;
while (num < arr.length) {
  console.log(arr[num]);
  num++;
}


// do while loop
score = 0;
do {
  console.log(score);
  score++;
} while (score < 5);

score = 10; // if score is 10, it will still run once since condition is checked later
do {
  console.log(score);
  score++;
} while (score < 5);