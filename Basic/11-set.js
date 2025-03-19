//set
//usa hash datos ordenados, pero no indexado
//declaracion
let mySet = new Set()//Esta es al forma correcta de declarar un Set vacio
// let mySet2 = {} //Este no es un Set vacio

console.log(mySet)


//inicializacion, dentro del parentesis deben is corchetes []

mySet = new Set(["Angel", "Salguero", "Belluz", 46, true, "dd@gg.com"])
console.log(mySet)

// Metodos comunes
//1.-add y delete (parecido a push y pop en arrays)
mySet.add("KZY")//add Añade al final. Set no tiene indice
console.log(mySet)

mySet.delete("KZY")//elimina el dato especificado entre los parentesis
console.log(mySet)

console.log(mySet.delete("Angel"))//elimina el dato especificado entre los parentesis y devuelve true si lo encontro y lo elimino, false si no lo encontro
console.log(mySet.delete(4))//elimina el dato especificado entre los parentesis y devuelve true si lo encontro y lo elimino, false si no lo encontro
console.log(mySet)

if(mySet.delete(4)){//elimina el dato especificado entre los parentesis y devuelve true si lo encontro y lo elimino, false si no lo encontro 
    console.log("Si existe")//Si existe, si lo encontro
}else{
    console.log("No existe")//No existe, si no lo encontro
}
//2.-has, para saber si un dato existe en el Set
console.log(mySet)
console.log(mySet.has("Salguero"))//true
console.log(mySet.has("47"))//false

//3.-Size, para saber cuantos elementos tiene el Set
console.log(mySet.size)
console.log(mySet)

//convertir un set a un array (from)
let myArray = Array.from(mySet)
console.log(myArray)

//convertir un array a un set
mySet = new Set(myArray)
console.log(mySet)


//Sets, no admiten elementos duplicados

mySet.add("Salguero")//Añade al final un mismo elemento, pero no lo añade porque ya existe
mySet.add("Salguero")//Añade al final un mismo elemento, pero no lo añade porque ya existe
mySet.add("Salguero")//Añade al final un mismo elemento, pero no lo añade porque ya existe
console.log(mySet)
