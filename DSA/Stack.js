let data = [];
let currentSize = data.length;
function push(newValue) {
  data[currentSize++] = newValue;
}
push(29);
push(20);

function pop() {
  if (currentSize > 0) {
    currentSize -= 1;
    data.length = currentSize;
  }
}
pop();
console.log(data);
