// Race - Promise.race is a JavaScript function that returns a promise which resolves or rejects as soon as one of the promises in an array resolves or rejects.
let p1 = new Promise(function (resolve, reject) {
  reject("Promise 1 is reject");
});

let p2 = new Promise(function (resolve, reject) {
  reject("Promise 2 is reject");
});

let p3 = new Promise(function (resolve, reject) {
  resolve("Promise 3 is resolved");
});
Promise.race([p1, p2, p3])
  .then((val) => {
    console.log(val);
  })
  .catch((err) => {
    console.log(err);
  });
