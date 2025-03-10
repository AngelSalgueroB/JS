// 1. Concatena dos cadenas de texto.
let nombre = "Luisa"; let carrera = "IngenIera"
console.log(nombre+" "+carrera)

// 2. Muestra la longitud de una cadena de texto.
console.log(nombre.length)
console.log(carrera.length)

// 3. Muestra el primer y Ãºltimo carÃ¡cter de un string.
console.log(nombre[0])
console.log(nombre[4])

// 4. Convierte a mayÃºsculas y minÃºsculas un string.
console.log(nombre.toUpperCase())
console.log(carrera.toLowerCase())

// 5. Crea una cadena de texto en varias lÃ­neas.
let variable = `hola
como estas
tu hoy`
console.log(variable)

// 6. Interpola el valor de una variable en un string.
console.log(`esto es una interpolación:  ${variable}`)
const variable2 = "adios"
console.log(`${variable} y ${variable2}`)

// 7. Reemplaza todos los espacios en blanco de un string por guiones.
let variable3 = "Esta es una frase string"
console.log(variable3.replace(" ", "*"))
console.log(variable3.replace(/ /g, "-"))

// 8. Comprueba si una cadena de texto contiene una palabra concreta.
console.log("8")
let variable4 = "cadena de texto normal"
console.log(variable4.includes("cadena"))
console.log(variable4.includes("hola"))

// 9. Comprueba si dos strings son iguales.
console.log("9")
let string1 = "Tengo mucha hambre"
let string2 = "Tengo poca hambre"
console.log(string1 === string2)

// 10. Comprueba si dos strings tienen la misma longitud.
console.log("10")
let st1 = ("es mi cumpleaños")
let st2 = ("es tu cumpleaños")
console.log(st1.length === st2.length)
console.log(st1 === st2)