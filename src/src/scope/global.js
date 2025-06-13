// variables

var a; // declarando
var b = "b"; //declarando / asignamos
b = "bb"; // reasignamos
var a = "aa"; // redeclaramos

// Global scope
var fruit = "apple"; // variable global
console.log(fruit);   

//Funcion para leer variable global
function bestFruit() {
  console.log(fruit);      
}

//Ejecutamos la funcion
bestFruit(); // apple

// Otra forma
function countries () {
  country = "Colombia"; // variable global sin var, let o const
  console.log(country);
}
