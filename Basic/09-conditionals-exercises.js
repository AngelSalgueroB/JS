// if/else/else if/ternaria
// 1. Imprime por consola tu nombre si una variable toma su valor.

let myName = "Eduardo"
if (myName == "Angel") {
    console.log(`Mi nombre es ${myName}`)
}
if (myName != "Angel") {
    console.log(`Mi nombre no es ${myName}`)
}

// 2. Imprime por consola un mensaje si el usuario y contraseÃ±a concide con unos establecidos.

let user = "abc"
let pass = 123

if (user == "abc" && pass == 123) {
    console.log(`El usuario es ${user} y clave ${pass} correctos`)
} else if (user == "abc" && pass != 123) {
    console.log(`Usuario ${user} correcto, pero clave ${pass} incorrecto`)
} else if (user != "abc" && pass == 123) {
    console.log(`Usuario ${user} incorrecto, pero clave ${pass} correcta`)
} else {
    console.log(`Usuario ${user} y clave ${pass} incorrectos`)
}


// 3. Verifica si un nÃºmero es positivo, negativo o cero e imprime un mensaje.
let num = 10
if (num == 0) {
    console.log(`El numero es ${num}`)
} else if (num < 0) {
    console.log(`El numero es ${num}, negativo`)
} else {
    console.log(`EL numero es ${num}, positivo`)
}

// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuÃ¡ntos aÃ±os le faltan.
let edad = 14
if (edad >= 18) {
    console.log(`tienes ${edad} años puedes votar`)
} else {
    console.log(`Tienes ${edad} años aun no puedes votar te falta ${18-edad} años`)
}


// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable dependiendo de la edad .
let category = edad >= 18 ? console.log("eres mayor de edad"):console.log("Eres menor")



// 6. Muestra en que estaciÃ³n del aÃ±o nos encontramos dependiendo del valor de una variable "mes".
//1,2,3 = Verano; 4,5,6 = otoño; 7,8,9 =invierno; primavera=10,11,12
let mes = 2
if (mes == 1 || mes == 2 || mes == 3) {
    console.log("Estamos en verano")
} else if (mes == 4 || mes == 5 || mes == 6) {
    console.log("Estamos en Otoño")
} else if (mes == 7 || mes == 8 || mes == 9) {
    console.log("Estamos en Invierno")
} else if (mes == 10 || mes == 11 || mes == 12) {
    console.log("Estamos en Primavera")
}
else {
    console.log("Error de numero de estacion")
}

// 7. Muestra el nÃºmero de dÃ­as que tiene un mes dependiendo de la variable del ejercicio anterior.

if (mes == 1 || mes == 3 || mes == 5 || mes == 7 || mes == 8 || mes == 10 || mes == 12) {
    console.log(`Este mes de ${mes} tiene 31 dias`)
} else if (mes == 4 || mes == 6 || mes == 9 || mes == 11) {
    console.log(`Este mes de ${mes} tiene 30 dias`)
} else if (mes == 2) {
    console.log(`Este mes de ${mes} tiene 28 dias`)
} else {
    console.log("Error de mes")
}

// switch

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma.
let message = 4
switch (message) {
    case 0:
        saludo = "Hola como estas"
        break
    case 1:
        saludo = "How are you?"
        break
    case 2:
        saludo = "Bonjour"
        break
    case 3:
        saludo = "Konnichiwa"
        break
    case 4:
        saludo = "Privet"
        break
    default:
        saludo = "Error"
}

console.log(saludo)

// 9. Usa un switch para hacer de nuevo el ejercicio 6.
// 6. Muestra en que estaciÃ³n del aÃ±o nos encontramos dependiendo del valor de una variable "mes".
//1,2,3 = Verano; 4,5,6 = otoño; 7,8,9 =invierno; primavera=10,11,12
let estacion
switch (mes) {
    case 0:
    case 1:
    case 2:
        estacion = "Es verano"
        break
    case 3:
    case 4:
    case 5:
        estacion = "Es otoño"
        break
    case 6:
    case 7:
    case 8:
        estacion = "Es invierno"
        break
    case 9:
    case 10:
    case 11:
        estacion = "Es primavera"
        break
    default:
        estacion = "Error de mes"
}
console.log(`es ${estacion}`)

// 10. Usa un switch para hacer de nuevo el ejercicio 7.
// 31 dias = 1,3,5,7,9,11
// 30 dias = 4,6,8,10
// 28 dias = 2
switch (mes) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 9:
    case 11:
        dias = "Estos meses tiene 31 dias"
        break
    case 4:
    case 6:
    case 8:
    case 10:
        dias = "Estos meses tienen 30 dias"
        break
    case 2:
        dias = "Este dia tiene 28 dias"
        break
    default:
        dias = "Error de dia"
       
}   
    console.log(`${dias}`)