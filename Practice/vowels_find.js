// aeiou;
let str = "Dynamic Coding with Sudhanshu";

let count = 0;

const vowels = ["a", "e", "i", "o", "u"];

for (let i of str.toLocaleLowerCase()) {
  if (vowels.includes(i)) {
    count++;
  }
}
console.log(count);

const reg = /[aeiou]/gi;
let chars = str.match(reg);
console.log(chars.join(","));
console.log(chars.length);
