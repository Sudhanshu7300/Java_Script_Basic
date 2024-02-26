// ** A closure is a function bundled with its lexical environment, allowing it to access variables from its parent scope even after that scope has closed.
function add() {
  let a = 10;
  function addchild() {
    console.log(a + 5);
  }
  return addchild;
}
const catchAdd = add();
catchAdd();

for (let i = 0; i <= 5; i++) {
  setTimeout(function log() {
    console.log(i);
  }, 1000);
}

for (var i = 0; i <= 5; i++) {
  setTimeout(function log() {
    console.log(i);
  }, 1000);
}

for (var i = 0; i <= 5; i++) {
  (function () {
    var j = i;
    setTimeout(function log() {
      console.log(j);
    }, 1000);
  })();
}

let x = 0;
for (; x <= 5; x++) {
  setTimeout(function log() {
    console.log(x);
  }, 1000);
}
 