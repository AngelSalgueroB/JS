// 1. Crea un array que almacene cinco animales.
console.log("1")
let myArray = ["perro", "gato", "conejo", "cuy", "pollo"]
console.log(myArray)

// 2. AÃ±ade dos mÃ¡s. Uno al principio y otro al final.
console.log("2")
myArray.unshift("ardilla")
myArray.push("serpiente")
console.log(myArray)

// 3. Elimina el que se encuentra en tercera posiciÃ³n.
console.log("3")
myArray.splice(2,1)//desde el 2, elimina 1 elemento, en este caso el elemento 3
console.log(myArray)


// 4. Crea un set que almacene cinco libros.
console.log("4")
let mySet = new Set(["libro1", "libro2", "libro3", "libro4", "libro5"])
console.log(mySet)


// 5. AÃ±ade dos mÃ¡s. Uno de ellos repetido.
console.log("5")
mySet.add("libro6")
mySet.add("libro1")
console.log(mySet)


// 6. Elimina uno concreto a tu elecciÃ³n.
console.log("6")
mySet.delete("libro1")
console.log(mySet)

// 7. Crea un mapa que asocie el nÃºmero del mes a su nombre.
console.log("7")
let myMap = new Map([["9","Septiembre"]])
console.log(myMap)

// 8. Comprueba si el mes numero 5 existe en el map e imprime su valor.
console.log("8")
console.log(myMap.has("5"))

// 9. AÃ±ade al mapa una clave con un array que almacene los meses de verano.
console.log("9")

myMap.set("summers months", ["Enero", "Febrero", "marzo"])    
console.log(myMap)

// 10. Crea un Array, transfÃ³rmalo a un Set y almacÃ©nalo en un Map.
console.log("10")
let myArray2 = [1,2]//Se crea el array
let mySet2 = new Set(myArray2)//se transforma en un Set
let myMap2 = new Map()//Se crea un nuevo Map
myMap2.set("numeros", mySet2)//Se almacena en el nuevo map
console.log(myMap2)
