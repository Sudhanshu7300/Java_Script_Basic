const userEmail = "sudhanshu90586@gmail.com";

if (userEmail) {
  // console.log("Got user email");
} else {
  // console.log("don't have user email");
}

//  ** falsy Values
// false, 0, -0, BigInt 0n, null, "", undefined,NaN

// ** truthy Values
// "0", 1 , "false", " ", [], {}, function(){},

const emptyObj = {};

if (Object.keys(emptyObj).length === 1) {
  // console.log("Got user email");
} else {
  console.log("don't have user email");
}

// false == 0; // true
// false == ""; // true
// 0 == ""; // true

// ** Nullish Coalescing Operator (??): null undefined
let val1;
// val1 = 5 ?? 10;
// val1 = null ?? 10;
val1 = undefined ?? 15 ?? 20;
console.log(val1);

// ** Ternary Operator

const iceTeaPrice = 100;
iceTeaPrice <= 80 ? console.log("Less then 80") : console.log("more then 80");

// == double equals
const a = 2 == "2";
console.log(a); // return true
// === triple
const b = 2 === "2"; // return type error

// example question
(function () {
  if ((-100 && 100 && "0") || [] === true || 0) {
    console.log(1); /// 1

    if ([] || (0 && false)) {
      console.log(2); // 2s
    }
    if (Infinity && NaN && "false") {
      console.log(3); // false
    }
    if (" ") {
      console.log(4); // 4
    } else console.log(5);
    if (({} || false === "") && !(null && undefined)) {
      console.log(6); // 6
    }
  }
})();
