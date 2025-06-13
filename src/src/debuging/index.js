var a = "Hello";

function hello() {
  let b = "Hello World!"; // This variable is block-scoped
  const c = "Hello Universe!"; // This variable is also block-scoped
  debugger;
}

hello(); // We call the function to execute it