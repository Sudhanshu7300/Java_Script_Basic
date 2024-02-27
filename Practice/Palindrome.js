let string = "MADAM";
let len = string.length;
let msgString = "It is a Palindrome";
for (let i = 0; i < len / 2; i++) {
  if (string[i] != string[len - 1 - i]) {
    msgString = "It is not a Palindrome";
  }
}

let arrString = ["Anuj", "MADAM", "Sudhanshu", "dad"];

for (let i = 0; i < arrString.length; i++) {
  let word = arrString[i].toLowerCase();
  let msg = "It is a Palindrome";
  for (j = 0; j < word.length / 2; j++) {
    if (word[j] != word[word.length - 1 - j]) {
      msg = "It is not a Palindrome";
      break;
    }
  }
  console.log("msg", msg);
}
// let reversedWord = word.split("").reverse().join("");
// if (word === reversedWord) {
//   console.log(arrString[i]);
// }
