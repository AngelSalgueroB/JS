//if, else if, else
//if (si) si pasa esto, has esto.
console.log("if")
let age = 46

if (age == 46) {
    console.log(`Mi edad es ${age}`)
}
if (age != 46) {
    console.log(`Mi edad no es ${age}`)
}
//else (si no) has este otro

console.log("else")
if (age == 46)
    console.log(`Mi edad es ${age}`)
else {
    console.log(`Mi edad no es ${age}`)
}


//else if (si no, si)(va al medio de if y else, puede anidarse varios)
console.log("else if")
if (age == 46) {
    console.log(`Mi edad es ${age}`)
} else if (age < 18) {
    console.log(`es menor de edad porque tienes ${age}`)
}
else {//se ejecuta cuando ninguna condicion de arriba se cumple
    console.log(`Mi edad no es ${age} pero ya eres mayor de edad`)
}

//Operadores ternarios ? : (es como escribir mas rapido un if y else)
console.log("Operadore ternario:")

const message = age == 46 ? "Mi edad es 46": "Mi edad no es 46"
console.log(message)

//switch: una unica variable para varias condiciones (anidar varios else if)
console.log("switch:")

let day = 6
switch (day) {//usar break al final de cada case, para que finalize
    case 0:
        dayName = "Lunes"
        break
    case 1:
        dayName = "Martes"
        break
    case 2:
        dayName = "Miercoles"
        break
    case 3:
        dayName = "Jueves"
        break
    case 4:
        dayName = "Viernes"
        break
    case 5:  
        dayName = "Sabado"
        break
    case 6:
        dayName = "Domingo"
    break

    default://usar siempre si la inicializacion no es ninguna!
        dayName = "numero de dia no exite"
}

    console.log(dayName)





