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
