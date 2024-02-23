// let counter = 0;

// let intervalId;

// function sayHi() {
//   counter++;
//   console.log("Hii", counter);
//   if (counter >= 4) {
//     clearInterval(intervalId);
//   }
// }
// intervalId = setInterval(sayHi, 2000);

// **setIntervalPolyfills

function createSetInterval() {
  let intervalID = 0;
  let intervalMap = {};

  function setIntervalPolyfills(callback, delay = 0, ...args) {
    var id = intervalID++;
    function repeat() {
      intervalMap[id] = setTimeout(() => {
        callback(...args);
        if (intervalMap[id]) {
          repeat();
        }
      }, delay);
    }
    repeat();
    return id;
  }

  function clearIntervalPollyfill(intervalID) {
    clearTimeout(intervalMap[intervalID]);
    delete intervalMap[intervalID];
  }

  return {
    setIntervalPolyfills,
    clearIntervalPollyfill,
  };
}

const { setIntervalPolyfills, clearIntervalPollyfill } = createSetInterval();

let counter = 0;
let intervalId;

function greeting() {
  counter++;
  console.log("Hello");
  if (counter >= 3) {
    clearIntervalPollyfill(intervalId);
  }
}

intervalId = setIntervalPolyfills(greeting, 2000);
