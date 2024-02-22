const tinderUser = {};
tinderUser.id = "13243";
tinderUser.name = "Sudhanshu sharma";

//

const regularUser = {
  email: "sudhanshu90586@gmail.com",
  fullName: {
    firstName: "Sudhanshu",
    lastName: "Sharma",
    secondName: {
      name: "Anuj",
    },
  },
};

// console.log(regularUser["fullName"].secondName.name);
const Obje1 = { 1: "one", 2: "two" };
const Obje2 = { 3: "three", 4: "four" };
// console.log({ ...Obje1, ...Obje2 });

const Obje3 = Object.assign({}, Obje1, Obje2);
// console.log(Obje3);

// f the first argument of Object.assign() is not defined or is null, it will throw a TypeError because Object.assign()
// expects the first argument to be an object.Therefore, it's
// necessary to provide an object, and using an empty object { } is a common pattern to create a new object to merge other objects into.

const users = [
  { id: 1, email: "aj@gmail.com" },
  { id: 1, email: "Sudhanshu@gmail.com" },
];

// console.log(Object.values(tinderUser));
// console.log(Object.keys(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty("age"));

// console.log(Object.);

const course = {
  coursename: "Java Basic",
  price: "999",
  courseInstructor: "Sudhanshu",
};
const { coursename, price, courseInstructor: Instructor } = course;
console.log(Instructor);


