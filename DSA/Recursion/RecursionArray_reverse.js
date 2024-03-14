let arrDes = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

function customReverse(data, start, end) {
  if (start <= end) {
    temp = data[start];
    data[start] = data[end];
    data[end] = temp;
    customReverse(data, start + 1, end - 1);
  }
}
customReverse(arrDes, 0, arrDes.length - 1);
console.log(arrDes);
