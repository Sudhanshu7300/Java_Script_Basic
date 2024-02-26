//Shallow Copy
// The spread operator method for creating a shallow copy involves using the spread operator (...) to duplicate the elements of an array or object at the first level,
//     allowing modifications without affecting the original array or object, though nested objects still reference the same memory locations.

//  With  Spread operator Method
let sports = ["Cricket", "Football", "Swimming", { a: "Sudhanshu", age: 25 }];

let copySports = [...sports];
copySports[1] = "Baseball";
copySports[3]["a"] = "Anuj";
// console.log("orignal", sports);
// console.log("Copy sports Array", copySports);

//  With  Array from Method
let sports2 = ["Cricket", "Football", "Swimming", { a: "Sudhanshu", age: 25 }];
let copySports2 = Array.from(sports2);
copySports2[1] = "Baseball";
copySports2[3]["a"] = "Anuj";
// console.log("orignal2", sports2);
// console.log("Copy sports2 Array", copySports2);

// **  With slice Method
let sports3 = ["Cricket", "Football", "Swimming", { a: "Sudhanshu", age: 25 }];
let copySports3 = sports3.slice(0);
copySports3[1] = "Baseball";
copySports3[3]["a"] = "Anuj";
// console.log("orignal2", sports3);
// console.log("Copy sports3 Array", copySports3);

let person = {
  name: "Vipul",
  age: 26,
  hobbies: ["sports", "coding", "music"],
};
let newPerson = Object.assign({}, person);
newPerson.age = 25;
newPerson.hobbies[2] = "awaraPanti";
console.log(person);
console.log(newPerson);
