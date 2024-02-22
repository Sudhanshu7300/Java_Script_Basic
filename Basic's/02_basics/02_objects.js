// singleton

// object literals
// Object.create

const mySym = Symbol("age");
const JsUser = {
  name: "Sudhanshu",
  "full name": "Sudhanshu Sharma",
  [mySym]: 19,
  location: "Delhi",
  email: "sudhanshu90586@gmail.com",
  isLoggedIn: false,
  lastLoginDays: ["Anuj", "Aj"],
};
// console.log(JsUser["full name"]);
// console.log(typeof JsUser[mySym]);
// Object.freeze(JsUser);
// console.log(JsUser);
JsUser.email = "anujsharma8449@gmail.com";
// console.log(JsUser);

JsUser.greetings = function () {
  console.log(`Check Log inside function log ${this.name}`);
};
JsUser.greetings();

console.log(JsUser.greetings());
// JsUser.greetings(),  also logging the return value of the function,
//  which is undefined because the function doesn't explicitly return anything.
