
// There's no chaining involved, and each promise resolves independently.

// Each file is read simultaneously, and their content is logged as soon as
// it's available, without waiting for the previous file read operations to complete.

const fs = require("fs");

console.log(fs);

let FileBased = fs.promises.readFile("./A1.txt");
let FileBased2 = fs.promises.readFile("./A2.txt");
let FileBased3 = fs.promises.readFile("./A3.txt");

FileBased.then((data) => {
  console.log("Data1 --> ", data.toString());
});

FileBased2.then((data) => {
  console.log("Data2 --> ", data.toString());
});
FileBased3.then((data) => {
  console.log("Data3 --> ", data.toString());
});

// 1 Other approach
let arr = ["./A1.txt", "./A2.txt", "./A3.txt"];

for (let i = 0; i < arr.length; i++) {
  let FileReadPromise = fs.promises.readFile(arr[i]);
  FileReadPromise.then(cb);
}

function cb(data) {
  console.log(data.toString());
}

// //2 Other approach

// let promises = arr.map((path) => fs.promises.readFile(path));
// Promise.all(promises)
//   .then((results) => {
//     results.forEach((data, index) => {
//       cb(arr[index], data);
//     });
//   })
//   .catch((error) => {
//     console.error("Error:", error);
//   });

// function cb(filePath, data) {
//   console.log("Content of", filePath, "==>", data);
// }
