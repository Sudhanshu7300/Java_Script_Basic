let string = "Sudhanshu Sharma";
let newString = "";
for (let i = string.length - 1; i >= 0; i--) {
  newString += string[i];
}
// console.log("loop------->", newString);

// console.log(string.split("").reverse().join(""));

function reverseString2(str) {
  return Array.from(str).reduce((acc, char) => char + acc, "");
}
// console.log(reverseString2(string));

function reverseString(str) {
  if (str === "") return "";
  else return reverseString(str.substr(1)) + str.charAt(0);
}

// **  -------------------------------------------------------------- String Reverce in Array>
let Array_string = ["My name is sudhanshu sharma"];
let updatedArray = [];

for (let i = 0; i < Array_string.length; i++) {
  let reversedString = "";
  for (let j = Array_string[i].length - 1; j >= 0; j--) {
    reversedString += Array_string[i][j];
  }
  updatedArray.push(reversedString);
}
console.log("updatedArray", updatedArray);

let ThirdArrayUpdated = [];

for (let i = 0; i < Array_string.length; i++) {
  let words = Array_string[i].split(" ");
  for (let j = 0; j < words.length; j++) {
    if (words[j] === "sudhanshu") {
      let reversedWord = "";
      for (let k = words[j].length - 1; k >= 0; k--) {
        reversedWord += words[j][k];
      }
      words[j] = reversedWord;
    }
  }
  ThirdArrayUpdated.push(words.join(" "));
}

console.log("ThirdArrayUpdated:", ThirdArrayUpdated);
