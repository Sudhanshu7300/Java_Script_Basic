// Shift();
// Push();
// Method using in Q/D
let queue = [];
let currentSize = queue.length;
let maxSize = 5;

function enqueue(newVal) {
  if (currentSize >= maxSize) {
    ("Queue already full");
  } else {
    queue[currentSize++] = newVal;
  }
}
function display() {
  console.log(queue);
}

function dequeue() {
  if (currentSize > 0) {
    for (let i = 0; i < queue.length; i++) {
      queue[i] = queue[i + 1];
    }
    currentSize--;
    queue.length = currentSize;
  }
}
enqueue(10);
enqueue(20);
enqueue(30);
display();
dequeue(10);
display();
