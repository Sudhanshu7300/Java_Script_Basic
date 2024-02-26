let p1 = new Promise(function (resolve, reject) {
  resolve("Promise 1 is resolved");
});

let p2 = new Promise(function (resolve, reject) {
  reject("Promise 2 is reject");
});

let p3 = new Promise(function (resolve, reject) {
  resolve("Promise 3 is resolved");
});

Promise.allSettled([p1, p2, p3])
  .then((value) => {
    for (let newValue of value) {
      console.log(newValue.status);
    }

    value.forEach((element) => {
      console.log("Second", element.status);
    });
  })
  .catch((err) => {
    console.log(err);
  });
