// Define an array
const myList = ["apple", "banana", "orange", "grape"];

// Function to traverse the list
function traverseList(list) {
  // Using a for loop
  console.log("Traversing list using a for loop:");
  for (let i = 0; i < list.length; i++) {
    console.log(list[i]);
  }

  // Using forEach loop
  console.log("Traversing list using forEach loop:");
  list.forEach((item) => {
    console.log(item);
  });
}

// Call the function to traverse the list
traverseList(myList);
