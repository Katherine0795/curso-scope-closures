var firstName;  //Valor indefinico
firstName = "John"; //Valor definido
console.log(firstName); // Imprime "John"

var lastName = "Doe"; // Declaramos y asignamos
lastName = "Smith"; // Reasignamos
console.log(lastName); // Imprime "Doe"

var secondName ="David"; // Declaramos y asignamos
var secondName = "Ana"; // Redeclaramos y reasignamos
console.log(secondName); // Imprime "Ana"

//Let
 let fruit = "Apple"; // Declaramos y asignamos
fruit = "Banana"; // Reasignamos

let fruit = "Orange"; // Esto causará un error porque no se puede redeclarar una variable con let en el mismo ámbito

// const
const animal = "Dog"; // Declaramos y asignamos
animal = "Cat"; // Esto causará un error porque no se puede reasignar una variable const
const animal = "Fish"; // Esto causará un error porque no se puede redeclarar una variable const en el mismo ámbito
console.log(animal); // Imprime "Dog"

const vehicles = []; // Declaramos un array vacío
vehicles.push("🚙")
console.log(vehicles);

vehicles.pop(); // Eliminamos el último elemento del array
console.log(vehicles); // Imprime "[]"