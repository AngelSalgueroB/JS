//Strings
let myName = "Angel"
let greeting = "hola, " + myName + "!"//varias cadenas con +
console.log(greeting)
console.log(typeof greeting)

//longitud
console.log(greeting.length)//imprime largo total del string

// Acceso a caracteres
console.log(greeting[0])//imprime primera letra(0)
console.log(greeting[1])
console.log(greeting[2])
console.log(greeting[3])
console.log(greeting[5])
console.log(greeting[11])
console.log(greeting[12])//undefined (solo hay 12 caracteres)

// Metodos comunes
console.log(greeting.toUpperCase())//all mayus
console.log(greeting.toLowerCase())//all minus
console.log(greeting.indexOf("hola"))//lugar del indice
console.log(greeting.indexOf("Angel"))//lugar del indice
console.log(greeting.indexOf("Eduardo"))//no existe, resultado -1
console.log(greeting.includes("hola"))//true si existe
console.log(greeting.includes("Angel"))//true si existe
console.log(greeting.includes("Eduardo"))//false si existe
console.log("atento aqui:")
console.log(greeting.slice(0,9))//solo se queda del cero al 8 del string.
console.log(greeting.replace("hola", "hi"))//reemplazar hola por hi

// Template literals `` usas acento invertido, sino, no funciona
let message = `hola Chino 
, como estas`//Para poder usar varias lneas solo funciona con el acento invertido.
console.log(message)
//Interpolacion incluye variables en las cadenas de texto dentro de un ``
let mail = "angelsalguero@sml.com"
console.log(`hola, ${myName}! tu correo es: ${mail}`)



