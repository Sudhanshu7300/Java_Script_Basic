"use strict";
// this keyword in mode with strict
// console.log(this); // returns empty object    // browser par window object

function showThis() {
  console.log(this); // returns undefined  // browser par undefined
}
showThis();

let obj = {
  username: "sudhnashu",
  age: 25,
  f: function () {
    console.log(this); // returns  Object // browser Object it self
    function g() {
      console.log(this); // returns undefined  // browser par undefined
    }
    g();
  },
};
obj.f();
