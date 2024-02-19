// Immediately Invoked Function Expressions
// The benefit of using an IIFE is that it allows you to execute a function immediately without needing to call it separately elsewhere in  code.
//  This can be useful for creating isolated scopes, avoiding global variable pollution, and executing code right away without cluttering the global namespace.
(function chai() {
  // name IIFE
  console.log(`DB Connected`);
})();

((name) => {
  console.log(`DB NOT Connected",${name}`);
})("sudhnashu");
