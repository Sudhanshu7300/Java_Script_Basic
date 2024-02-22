let myDate = new Date();

let myCreatedDate = new Date("2023-03-16");
console.log(myCreatedDate.toLocaleString());

console.log(myDate.toLocaleString("default", { weekday: "long" }));
console.log(myDate.toLocaleString("default", { timeStyle: "short" }));
console.log(myDate.toLocaleString("default", { dateStyle: "full" }));
