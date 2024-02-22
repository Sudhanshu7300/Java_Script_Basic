// this keyword in mode non strict

// console.log(this); // returns empty object

function showThis() {
  //   console.log(this); // returns  Global object in non strict mode
}
showThis();

let obj = {
  username: "sudhnashu",
  age: 25,
  f: function () {
    // console.log(this); // returns  Object
    function g() {
      console.log(this); // returns Global Object
    }
    g();
  },
};

obj.f();
