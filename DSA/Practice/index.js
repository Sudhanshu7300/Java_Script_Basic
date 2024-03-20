let data = [10, 7, 19, 228, 8, 100, 89];
let eventArray = [];
let count = 0;
for (let i = 0; i < data.length; i++) {
  if (data[i] % 2 == 0) {
    count++;
    eventArray.push(data[i] * 2);
  }
}
console.log(eventArray);
console.log("count", count);
