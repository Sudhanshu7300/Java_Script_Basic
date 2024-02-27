let num = 14;
let isPrime = true;

if (num === 1) {
  console.log(`${num} is neither prime nor composite`);
} else if (num < 1) {
  console.log(`${num} is not a prime number`);
} else {
  for (let i = 2; i < num; i++) {
    if (num % i == 0) {
      isPrime = false;
      break;
    }
  }

  if (isPrime) {
    console.log(`${num} is a prime number`);
  } else {
    console.log(`${num} is not a prime number`);
  }
}
