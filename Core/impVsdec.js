// Imperative way

const x = 1;

const xSquared = x * x;
let isEven;
if (xSquared % 2 === 0) {
  isEven = true;
} else {
  isEven = false;
}

console.log(isEven);

//Declarative way

const isSquareEven = (x) => ((x * x) % 2 == 0 ? true : false);
console.log(isSquareEven(2));
