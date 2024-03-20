let str1 = "Sudhanshu";
let ObjStr1 = {};
for (ch of str1.toLowerCase()) {
  ObjStr1[ch] = (ObjStr1[ch] || 0) + 1;
}
console.log(ObjStr1);
