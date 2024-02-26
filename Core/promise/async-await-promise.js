async function inc(x) {
  x = x + (await 1);
  return x;
}
async function increment(x) {
  x = x + 1;
  return x;
}
inc(1).then(function (x) {
  increment(x).then(function (x) {
    // console.log(x);
  });
});

function resolveAfterNSeconds(n, x) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(x);
    }, n);
  });
}

(function () {
  let a = resolveAfterNSeconds(1000, 1);
  console.log(a);
  a.then(async function (x) {
    let y = await resolveAfterNSeconds(2000, 2);
    console.log(y);
    let z = await resolveAfterNSeconds(1000, 3);
    console.log(z);
    let p = resolveAfterNSeconds(2000, 4);
    let q = resolveAfterNSeconds(1000, 5);

    console.log(x + y + z + (await p) + (await q)); // both await in single line so resolve  in combined time
  });
})();
