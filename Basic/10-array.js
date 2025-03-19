//arrays
//inicializacion 1 recomendado
let myArray = []

//inicializacion 2 no recomendado, solo en casos especificos donde pueda aplicarse
let myArray2 = new Array()

//Ver resultados

console.log(myArray)
console.log(myArray2)

//Inicializacion
myArray = [3]
myArray2 = new Array(3)//Un solo numero solo reversa la casilla este caso 3

console.log(myArray)
console.log(myArray2)

myArray = [1,2,3,4, "Angel"]
myArray2 = new Array("Angel", "Eduardo", "Salguero", 46, true)

console.log(myArray)
console.log(myArray2)

myArray2 = new Array(3)
myArray2[0]= "Angel"
myArray2[1]= "Eduardo"
myArray2[4]= "Salguero"
console.log(myArray2)

// Metodos comunes
myArray = [1,2]

// 1 PUSH, agrega items al final. Pop, elimina el ultimo
console.log("PUSH && POP")
console.log(myArray)
myArray.push("A")
myArray.push("B")
myArray.push("C")
myArray.push("Eduardo")
myArray.push("Salguero")
myArray.push(46)

console.log(myArray.pop())//elimina el ultimo y lo devuelve
myArray.pop()

console.log(myArray)

//2 shift, elimina el primer item del array 
// unshift, se le pasa un listado, agrega uno o mas al principio 
console.log("SHIFT && UNSHIFT")
console.log(myArray.shift())//elimina Angel
console.log(myArray)

myArray.unshift("Angel", "Salguero", 46)
console.log(myArray)

//3 length, es una propiedad, cuanto mide el array
console.log("LENGHT")
console.log(myArray.length)

// 4 clear, para borrar un array.
console.log("CLEAR")
myArray = []
// myArray.length = 0 //metodo alternativo no recomendado
console.log(myArray)

// 5 slice, obtener la posicion y hasta donde (este ultimo no lo considera)
console.log("SLICE:")
myArray.push("Angel", "Eduardo", "Salguero", 46, true)//agregamos 4 items
console.log(myArray)
let myNewArray = myArray.slice(0,2)//desde 0 al 1, pero sin tenerlo en cuenta
console.log(myNewArray)

//splice, elimina un elemento
console.log("SPLICE")
 myArray.splice(1,3)//desde 1 (no lo considera), cuantos 3
 console.log(myArray)

 myArray = new Array("Angel", "Eduardo", "Salguero", 46, true)
 console.log(myArray)
 myArray.splice(1,2,"nueva entrada")//1: a partir. 2: se eliminan 2. 3: se agrega este item
 console.log(myArray)
