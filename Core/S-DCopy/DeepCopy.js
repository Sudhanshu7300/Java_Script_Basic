// ** Deep -------------------------------------------------Deep Copy

// Deep copy means creating a new reference or instance of a complex data structure, like an array or object,
//     where every element within the structure, including nested elements,
//     is duplicated.This ensures that any changes made to the copied structure won't affect the original one, and vice versa. In simpler terms,
//  it's like making a completely independent clone.

let sports = ["Cricket", "Football", "Swimming", { a: "Sudhanshu", age: 25 }];

let copySports = JSON.parse(JSON.stringify(sports));
console.log(copySports, "copySports");
copySports[1] = "Baseball";
copySports[3]["a"] = "Anuj";
console.log("orignal", sports);
console.log("Copy sports Array", copySports);

let obj = {
  name: "sudhanshu",
  age: 35,
};

let newObj = { ...obj };
newObj.name = "Anuj";
console.log(obj);
console.log(newObj);

let person = {
  name: "Raman",
  age: 22,
  hobbies: ["sports", "Coding", "music"],
};

let newPerson = JSON.parse(JSON.stringify(person));
newPerson.hobbies[0] = "singing";
console.log(person);
console.log(newPerson);
