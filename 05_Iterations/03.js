// for of

const arr = [1, 2, 3, 4, 5, 6];

for (const num of arr) {
  //   console.log(num);
}

let greetings = "Hello world!";
for (const greet of greetings) {
  //   console.log(greet);
}

// Maps
const myMap = new Map();
myMap.set("IN", "India");
myMap.set("USA", "United State of America");
myMap.set("Fr", "France");

for (const [key, value] of myMap) {
  console.log(key, "-", value);
}
