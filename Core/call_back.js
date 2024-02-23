// A synchronous callback in JavaScript is a function passed as an argument to another function, to be executed immediately within the same execution context.
function greet(personName, callback) {
  let msg = "Hello " + personName;
  callback(msg);
}
function logGreeting(greeting) {
  console.log(greeting);
}

// greet("sudhanshu", logGreeting);

//  ** Asynchronous Callback
// An asynchronous callback in JavaScript is a function passed as an argument to another function, to be executed later, often after an asynchronous operation or event.

setTimeout(() => {
  console.log("I am st1");
}, 2000);

setTimeout(() => {
  console.log("I am st2");
}, 1000);

function sayBye() {
  console.log("Bye");
}
sayBye();
