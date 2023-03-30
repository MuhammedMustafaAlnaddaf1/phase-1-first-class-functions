// receivesAFunction function
function receivesAFunction(callback) {
    // Call the callback function
    callback();
  }
  
  // returnsANamedFunction function
  function returnsANamedFunction() {
    // Define and return a named function
    function namedFunction() {
      console.log("This is a named function!");
    }
    return namedFunction;
  }
  
  // returnsAnAnonymousFunction function
  function returnsAnAnonymousFunction() {
    // Return an anonymous function
    return function() {
      console.log("This is an anonymous function!");
    }
  }