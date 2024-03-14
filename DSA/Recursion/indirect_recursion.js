let money = 100;
let totalapple = 0;

function buyApple(value) {
  if (value > 0) {
    // console.log("I have", value, "RS", totalapple);
    buyMore(value);
  } else {
    // console.log("I don't have more money", totalapple);
  }
}
function buyMore(value) {
  totalapple++;
  buyApple(value - 10);
}
buyApple(money);
