let string = ["my name is sudhanshu"];

const capitalizeFirstLetter = (str) => {
  return str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

let capitalizedString = string.map(capitalizeFirstLetter);
console.log(capitalizedString);
