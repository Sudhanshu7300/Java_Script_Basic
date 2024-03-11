let arr1 = [2, 9, 6, 8, 4];
let arr2 = [4, 8, 6, 9, 2];
// every(): Sabhi items ke liye condition true hoti hai toh true return karta hai.
// indexOf(): Ek item ka index dhundta hai array me, agar milta hai toh index return karta hai, nahi toh -1.

const isArrSame =
  arr1.length === arr2.length &&
  arr1.every((curEle) => {
    return arr2.indexOf(curEle) > -1;
  });

console.log(isArrSame);
