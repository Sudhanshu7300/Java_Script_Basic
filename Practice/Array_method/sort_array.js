let arr1 = [2, 1, 9, 7, 8, 10, 3, 4, 6, 5];

// const newarray = arr1.sort((a, b) => a - b);
// console.log(newarray);

for (i = 0; i < arr1.length; i++) {
  for (j = 0; j < arr1.length; j++) {
    if (arr1[j] > arr1[j + 1]) {
      // 2 > 1
      let temp = arr1[j]; // 2 = 2
      arr1[j] = arr1[j + 1]; //  2 = 1
      arr1[j + 1] = temp; //     1 = 2
    }
  }
}
console.log(arr1);

let arr2 = ["a", "d", "c", "b"];

for (i = 0; i < arr2.length; i++) {
  for (j = 0; j < arr2.length; j++) {
    if (arr2[j] > arr2[j + 1]) {
      [arr2[j], arr2[j + 1]] = [arr2[j + 1], arr2[j]];
    }
  }
}
console.log(arr2);

let arr3 = ["a", "d", "c", "B"];

for (let i = 0; i < arr3.length; i++) {
  for (let j = 0; j < arr3.length - 1; j++) {
    let lowerA = arr3[j].toLowerCase();
    let lowerB = arr3[j + 1].toLowerCase();
    if (lowerA === lowerB) {
      if (arr3[j] > arr3[j + 1]) {
        [arr3[j], arr3[j + 1]] = [arr3[j + 1], arr3[j]];
      }
    } else {
      if (lowerA > lowerB) {
        [arr3[j], arr3[j + 1]] = [arr3[j + 1], arr3[j]];
      }
    }
  }
}

let arr4 = [11, 16, 17, 14];
let arr5 = [15, 12, 13, 18];
let UpdateReverse = [];
function mergeNsortArrays(value, ...element) {
  let startIndex = value.length;
  // for (let num of element) {
  //   for (let secondArr of num) {
  //     value[startIndex++] = secondArr;
  //   }
  // }
  // ** merged the array
  for (let i = 0; i < element.length; i++) {
    let num = element[i];
    for (let j = 0; j < num.length; j++) {
      value[startIndex++] = num[j];
    }
  }
  //  ** Sort the merged array
  for (let i = 0; i < startIndex; i++) {
    for (let j = 0; j < startIndex; j++) {
      if (value[j] > value[j + 1]) {
        [value[j], value[j + 1]] = [value[j + 1], value[j]];
      }
    }
  }
  //** Reversing the merged array
  for (let i = startIndex - 1; i >= 0; i--) {
    UpdateReverse.push(value[i]);
  }

  return value;
}

let newarray = mergeNsortArrays(arr4, arr5);
console.log(UpdateReverse);
console.log(newarray);
