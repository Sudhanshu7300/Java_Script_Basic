let data = [];
let currentSize = data.length;
function push(item) {
  data[currentSize++] = item;
}
function pop() {
  lastRemoveItem = data[currentSize - 1];
  currentSize -= 1;
  data.length = currentSize;
  return lastRemoveItem;
}

function reverseStr(item) {
  for (let i = 0; i < item.length; i++) {
    push(item[i]);
  }
  for (let i = 0; i < item.length; i++) {
    item[i] = pop();
  }
}
let str = "Sudhanshu";
str = str.split("");
reverseStr(str);
console.log(str.join(""));
