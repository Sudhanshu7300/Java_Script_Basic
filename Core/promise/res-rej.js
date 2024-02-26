let p1 = Promise.resolve("Promise resolved").then((val) => {
  console.log(val);
});

let p2 = Promise.reject("Promise reject").catch((err) => {
  console.log(err);
});
