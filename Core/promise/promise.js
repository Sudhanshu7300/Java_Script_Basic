
// Promises provide a more structured and flexible approach for handling asynchronous operations compared to callbacks,
//   offering better error handling, chaining, and avoidance of callback hell.

const PENDING = 0;
const FULLFILLED = 1;
const REJECTED = 2;

function CustomPromise(doWork) {
  let state = PENDING;
  let value = null;
  let handlers = [];
  let catchers = [];

  function resolve(result) {
    if (state !== PENDING) return;
    state = FULLFILLED;
    value = result;
    handlers.forEach((h) => h(value));
  }

  function rejected(err) {
    if (state !== PENDING) return;
    state = REJECTED;
    value = err;
    catchers.forEach((c) => c(value));
  }

  this.then = function (SuccessCallback) {
    if (state === FULLFILLED) {
      SuccessCallback(value);
    } else {
      handlers.push(SuccessCallback);
    }
  };
  this.catch = function (FailureCallback) {
    if (state === REJECTED) {
      FailureCallback(value);
    } else {
      catchers.push(FailureCallback);
    }
  };

  doWork(resolve, rejected);
}

const doWork = (res, rej) => {
  if (2 == 23) {
    setTimeout(() => {
      console.log(res("Promise Resolved"));
    }, 2000);
  } else {
    setTimeout(() => {
      console.log(rej("Promise Rejected"));
    }, 2000);
  }
};

let greetMsg = new CustomPromise(doWork);

greetMsg.then((value) => {
  console.log("then log", value);
});

greetMsg.catch((value) => {
  console.log("catch log", value);
});




