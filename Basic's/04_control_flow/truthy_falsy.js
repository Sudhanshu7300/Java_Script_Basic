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
