// **  Primitive  - CallByValue  use Stack Memory  copy of value
// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const id = Symbol("123");
const anotherId = Symbol("123");

// Value are not Same
console.log(id === anotherId);

// ** Reference (Non Primitive) _ CallByReference  use Heap Memory
// type  : Arrays, Objects, Functions

// Example Stack Memory
let myName = "Sudhanshu";
let anotherName = "Anuj";

anotherName = "Aj";
console.log(myName);
console.log(anotherName);

// Example Heap Memory

let userOne = {
  email: "sudhanshu90586@gmail.com",
  mobileNumber: "8077445265",
};
let userTwo = userOne;

userTwo.email = "anujsharma8449@gmail.com";
console.log(userOne.email);
console.log(userTwo.email);
