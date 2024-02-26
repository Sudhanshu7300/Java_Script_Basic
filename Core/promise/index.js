// Craete a SetTimout with promise
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
delay(3000).then(() => console.log("run after 3 second"));

//  success and failure callbacks in a then block of a Promise, you can chain multiple then blocks, where each then block handles either success or failure independently.
delay(3000).then(
  (result) => {
    console.log("Success:", result);
    // Handle success
  },
  // Failure callback
  (error) => {
    console.error("Error:", error);
    // Handle failure
  }
);
