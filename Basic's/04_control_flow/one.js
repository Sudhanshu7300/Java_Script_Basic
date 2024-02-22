const isUserLoggedIn = true;
if (2 >= 2) {
  //   console.log("executed");
} else {
  //   console.log("Not execute");
}

// <, >, <=, >=, ==, !=, ===, !==

const balance = 2000;

// if (balance > 1000) console.log("Average balance "); // implicit scope

// if (balance < 1000) {
//   console.log("less then 1000");
// } else if (balance < 1500) {
//   console.log("less then 1500");
// } else if (balance < 2000) {
//   console.log("less then 2000");
// } else {
//   console.log("less then 2500");
// }

const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

if (isUserLoggedIn && debitCard && 2 == 2) {
  console.log("Allow to buy course");
}

if (loggedInFromEmail || loggedInFromGoogle) {
  console.log("user logged In fro email ");
}
