// bind: Returns a new function that, when called, has its this keyword set to a specified value and arguments provided as an array-like object.
let showDetail = function (city, car) {
  console.log(
    `${this.name} is ${this.age} year old, he live in ${city} and he drives ${car}`
  );
};

let Person = {
  name: "Sudhanshu",
  age: 25,
};

let Person2 = {
  name: "Anuj",
  age: 11,
};
// function borrowing
// Person.showDetails.call(Person2);

let detailsBind = showDetail.bind(Person, "Noida", "Thar");

// detailsBind();

// ** ----------------------------------------------------------------------------------------Bind Method Pollyfills

Function.prototype.myBind = function (...argument) {
  let obj = this;
  let params = argument.slice(1);
  return function (...argument2) {
    obj.apply(argument[0], [...params, ...argument2]);
  };
};

let showDetailPly = showDetail.myBind(Person, "Thar");
showDetailPly("Noida");
