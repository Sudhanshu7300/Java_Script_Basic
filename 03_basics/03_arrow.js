const user = {
  username: "Sudhanshu",
  price: 2999,
  welcomeMessage: function () {
    console.log(`${this.username} Welcome to website `);
    console.log(this);
  },
  //this refer current context
};
// user.welcomeMessage();
// user.username = "Anuj";
// user.welcomeMessage();

// arrow functions have a shorter syntax compared to regular functions,
function Chai() {
  let username = "Sudhanshu Sharma";
  console.log(this.username);
}
// Chai();

const NewData = () => {
  let username = "Sudhanshu Sharma";
  console.log(this);
};
NewData();
// Arrow functions are commonly used for anonymous functions, shorter function expressions, and in situations where you want to preserve the lexical scope of this.
// Regular functions are used in scenarios where you need to define methods on objects, use the arguments object, or where you need more control over the binding of this.
// Arrow functions cannot be used as constructors to create new objects, whereas regular functions can be used with the new keyword to create instances.
// Regular function
function Person(name) {
  this.name = name;
}

const john = new Person("John");
console.log(john.name); // Output: John

// Arrow function
const PersonArrow = (name) => {
  this.name = name; // Error: Cannot use 'this' in arrow function
};

// const sarah = new PersonArrow("Sarah"); // Error: PersonArrow is not a constructor

// Implicitly
const addTwo = (num1, num2) => num1 + num2;
console.log(addTwo(2, 4));

const ObjectReturn = (num1, num2) => ({ username: "sudhnashu" });

console.log(ObjectReturn());
