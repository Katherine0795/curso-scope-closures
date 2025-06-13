function fruits () {
  if (true) {
    var fruit1 = 'apple'; // This variable is scoped to the function, not the block
    let fruit2 = 'kiwi'; // This variable is block-scoped
    const fruit3 = 'banana'; // This variable is also block-scoped

    console.log(fruit2); 
    console.log(fruit3);
  }
}
 console.log(fruit1); // apple

 fruits(); // We call the function to execute it