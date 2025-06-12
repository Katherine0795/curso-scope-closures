function greeting(){
  let username = "Ana"; // variable local
  console.log=(username); // Ana

  if (usernamer === "Ana") {
    console.log(`Hello ${username}`); // Hello Ana
  }

}

greeting(); // Ejecutamos la funcion
console.log(username); // ReferenceError: username is not defined