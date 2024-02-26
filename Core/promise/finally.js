let loader = true;
function Test() {
  let a = 1 + 1;

  return new Promise(function (resolve, reject) {
    if (a == 2) {
      resolve("Promise resolve YESSSSSSSSSSSSSSSSSSSSS");
    } else {
      reject("Promise Rejected NOOOOOOOOOOOOOOOOOOOOOO");
    }
  });
}

Test()
  .then((value) => {
    console.log(value);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally((updatedNew) => {
    loader = false;
    console.log("Experiment completed", updatedNew);
  });
