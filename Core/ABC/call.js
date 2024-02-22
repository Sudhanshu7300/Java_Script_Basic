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

showDetail.call(Person, "Noida", "Thar");
