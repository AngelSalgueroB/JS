//Operadores

//Operadores Aritméticos
let a=5
let b=10
console.log(a+b)//suma
console.log(a-b)//resta
console.log(a*b)//producto
console.log(a/b)//división
console.log(a%b)//residuo
console.log("exponenente:")
console.log(a**b)//exponente

a++//incremento
console.log(a)
a--//decremento
console.log(a)

//operador de asignacion

let variable = 6
variable += 5 // = variable = variable + 5
console.log(variable)
variable -= 2
variable *= 2
variable /= 2
variable %= 2
variable **= 2

//Operadores de comparación
//El resultado sismepre será un boolean true or false:
console.log("Operadores de comparación")
console.log(a)//5
console.log(b)//10
console.log(a>b)//false
console.log(a<b)//true
console.log(a>=b)//false
console.log(a<=b)//true
console.log(a==b)//false
console.log(a==5)//igualdad por valor
console.log(a=="5")//igualdad por valor
console.log(a==a)
console.log(a===a)//igualadd por identidad (por tipo y valor)
console.log("HOLA")
console.log(a==="5")//false, diferente tipo de dato
console.log(a===5)//true, igual tipo de dato
console.log(a!=5)//false
console.log(a!=="5")//true

console.log(0==false)//cero siempre es falso y el resto es true
console.log(1==false)
console.log(2==false)
console.log(0=="")
console.log(0=="hola")
console.log(0==="")
console.log(undefined == null)
console.log(undefined === null)

//truthy values (valores verdaderos):
//todos los numeros positivos y negativos menos el cero
//todas las cadenas de texto menos las vacias
//el boolena true

//falsy values (valores falsos):
//0
//0n
//null
//undenfinen
//NaN
//el boolean false
//cadenas de texto vacias


//operadores lógicos

//and (&&) Solo es "true" cuando todos son verdaderos.
console.log("Operadores lógicos && = Y")
console.log(5>10 && 15>20)//false
console.log(5<10 && 15<20)//true
console.log(5<10 && 15>20)//false
console.log(5>10 && 15>20 && 30>40)//false

//or (||) es verdadera si al menos una es verdadera
console.log("Operadores lógicos || = O")
console.log(5>10 || 15>20)//false
console.log(5<10 || 15<20)//true
console.log(5<10 || 15>20)//true
console.log(5>10 && 15>20 || 30>40)//false

//not(!) invierte el valor de un boolean
console.log("Operadores lógicos ! = NOT")
console.log(!true)
console.log(!false)
console.log(!(5<10))
console.log(!(5>10))

//operador ternario 
//"despues de ? es true, despues de : false"
console.log("Operador ternario (? :)")
const isRainig = false
isRainig ? console.log("Esta lloviendo") : console.log("No esta lloviendo")

let edad = false
edad?console.log("Eres mayor de edad"):console.log("Eres menor de edad")

