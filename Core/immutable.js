// function programming suggest always immutable

const person1 = {
  name: "sudhanshu",
  Age: 25,
};
const person2 = person1;
person2.name = "Anuj";
// console.log(person1);
// console.log(person2);

// ** Immutable
const person3 = {
  name: "Raman",
  Age: 25,
};
const person4 = Object.assign({}, person3);
// 2nd Way
const person41 = { ...person3 };

person3.name = "Aman";
person41.name = "Ravi";
// console.log(person3);
// console.log(person4);
console.log(person41);
