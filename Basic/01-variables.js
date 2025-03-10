//Crear variables:
//var, forma original para declarar variables, no es recomendable.
var helloWorld = "Hello JS" //creacion
console.log(helloWorld) //lectura
helloWorld = "Hello JS World" //modificacion 
console.log(helloWorld) //lectura

/////////////////////////////////////////////////////////////////////////
// let, forma recomendada para declarar variables
let helloWorld2 = "Hello JS 2" //creacion
console.log(helloWorld2) //lectura
helloWorld2 = "Hello JS World 2" //modificacion 
console.log(helloWorld2) //lectura

/////////////////////////////////////////////////////////////////////////
//const
const helloWorld3 = "Hello JS 3" //creacion
console.log(helloWorld3) //lectura     
//error
//helloWorld3 = "Hello JS World 3" //modificacion
//console.log(helloWorld3) //lectura

const y = 10;
y == 20; // Error: Assignment to constant variable
console.log(y);