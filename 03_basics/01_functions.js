function AddTwoNumber(number1, number2) {
  //   return number1 + number2;
  const result = number1 + number2;
  return result;
}

const result = AddTwoNumber(12, 21);
console.log("Result", result);

function loginUserMesage(username = "sudhanshu") {
  return `${username} just logged in `;
}
console.log(loginUserMesage("sharma"));

function calculatePrice(val1, val2, ...num1) {
  return num1;
}

console.log(calculatePrice(200, 300, 300, 200));

function handleObject(anyObject) {
  console.log(
    `Username is ${anyObject.username} and price is ${anyObject.price}`
  );
}
handleObject({
  username: "Sudhanshu",
  price: 122,
});

function handleArray(getArray) {
  return console.log(getArray[0]);
}
handleArray([200, 400, 200, 100]);
