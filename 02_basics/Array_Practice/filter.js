let strings = ["Sudhanshu", "Anuj", "Manish", "Mayank", "Ravi", "Aj"];

function findFiveChar(names) {
  return names.filter((ele) => {
    if (ele.length > 5) {
      return true;
    }
  });
}
const newString = findFiveChar(strings);
// console.log(newString);

function RemoveStartWithA(names) {
  return names.filter((ele) => {
    return ele[0] !== "A";
  });
}

const newString2 = RemoveStartWithA(strings);
console.log(newString2);

function filterStrings(names) {
  return names.filter((ele) => {
    // Check if the string does not contain 'a' and contains at least one numeric digit
    return !ele.includes("a") && /\d/.test(ele);
  });
}

var stringsArray = ["apple", "banana", "123", "mango", "4567"];
var filteredArray = filterStrings(stringsArray);
console.log(filteredArray);

function filterCapitalStrings(array) {
  return array.filter(function (string) {
    return string.charAt(0) === string.charAt(0).toUpperCase();
  });
}

// Example usage:
var stringsArray = ["Apple", "banana", "Orange", "Mango", "pear"];
var filteredArray = filterCapitalStrings(stringsArray);
console.log(filteredArray);

function filterPalindromes(array) {
  return array.filter(function (string) {
    // Reverse the string and check if it is equal to the original string
    return string === string.split("").reverse().join("");
  });
}

// Example usage:
var stringsArray = ["radar", "level", "apple", "deified", "banana"];
var palindromesArray = filterPalindromes(stringsArray);
console.log(palindromesArray); // Output: ["radar", "level", "deified"]
