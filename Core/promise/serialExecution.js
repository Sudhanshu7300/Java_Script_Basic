//  These promises are chained together using .then() to ensure sequential execution.

const fs = require("fs").promises;

let FileRead1 = fs.readFile("./A1.txt");

FileRead1.then((data1) => {
  console.log("Content1", data1);    
  return fs.readFile("./A2.txt");
})
  .then((data2) => {
    console.log("Content2", data2);
    return fs.readFile("./A3.txt");
  })
  .then((data3) => {
    console.log("Content3", data3);
  })
  .catch((error) => {
    console.log("error", error);
  });
// File reading and logging are performed sequentially.
// Each file is read and its content logged before moving on to the next file.
