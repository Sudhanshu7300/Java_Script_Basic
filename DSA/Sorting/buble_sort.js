let arrSort = [13, 12, 4, 5, 798, 1, 2, 6, 3, 10, 14, 11];

for (let i = 0; i < arrSort.length; i++) {
  for (let j = 0; j < arrSort.length; j++) {
    if (arrSort[j] > arrSort[j + 1]) {
      let temp = arrSort[j]; // current value store
      arrSort[j] = arrSort[j + 1];
      arrSort[j + 1] = temp;
    }
  }
}
console.log(arrSort);
