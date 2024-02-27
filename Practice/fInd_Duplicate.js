const arrNumber = [1, 2, 3, 4, 1, 2, 5, 4, 5];
const occurrences = {};
const findDupNumber = [];
const removeDuplicate = [];

for (let i = 0; i < arrNumber.length; i++) {
  currentNumber = arrNumber[i];
  if (occurrences[currentNumber] === undefined) {
    occurrences[currentNumber] = removeDuplicate.push(currentNumber); //  Remove Duplicate Number
  } else {
    findDupNumber.push(currentNumber); // Find Duplicate Number
  }
}
console.log("Find Duplicate Number UpdatedArray", findDupNumber);
console.log("Remove  Duplicate Number ", removeDuplicate);

// Loop Iteration:

// Current Number Check:
// currentNumber = arrNumber[i];: Har iteration mein current element ko store karta hai.
// Duplicate Check and Handling:

// if (occurrences[currentNumber] === undefined): Har number ki occurrences track karne ke liye occurrences object ka istemal hota hai.
// occurrences[currentNumber] = removeDuplicate.push(currentNumber);: Agar number pehli baar aata hai, toh use unique list mein daal deta hai (removeDuplicate array).
// else: Agar number pehle se hai, toh use duplicate list mein daal deta hai (findDupNumber array).
