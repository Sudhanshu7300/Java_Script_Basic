// ** Linear Search
let data = [10, 20, 90, 400, 250, 160, 400];

let search = 400;
let index = [];
for (let i = 0; i <= data.length; i++) {
  if (data[i] == search) {
    index.push(data[i]);
  }
}
console.log(index);

// console.log(data.indexOf(search));
