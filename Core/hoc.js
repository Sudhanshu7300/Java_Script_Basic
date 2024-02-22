// "Higher Order Component (HOC) is a function that takes a component and returns a new component with enhanced functionality,
//  such as mapping, filtering, or reducing data arrays."
const arr = [1, 2, 3, 5, 7];
// map
const SquareofArry = arr.map((x) => x * x);
// filter
const FilterEven = arr.filter((x) => {
  return x % 2 === 0;
});
// Reduce
const SumofArray = arr.reduce((acc, value) => {
  return acc + value;
}, 0);

// Polyfills

// Map
function MapPolyfills(value) {
  let newArry = [];
  for (let i = 0; i < value.length; i++) {
    newArry.push(value[i] * value[i]);
  }
  return newArry;
}

console.log(MapPolyfills(arr));

function FilterPollyfilss(item) {
  let updatedArr = [];
  for (i = 0; i < item.length; i++) {
    if (i % 2 === 0) {
      updatedArr.push(item[i]);
    }
  }
  return updatedArr;
}

console.log(FilterPollyfilss(arr));

let array = [1, 2, 3, 4, 5];

function customReduce(arr) {
  let accumulator = 0;
  for (let i = 0; i < arr.length; i++) {
    accumulator = accumulator + arr[i];
  }
  return accumulator;
}

console.log("customReduce----------------------", customReduce(array));
