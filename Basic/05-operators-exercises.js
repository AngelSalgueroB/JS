// 1. Crea una variable para cada operación aritmética.
let suma = 5 + 3
let resta = 10 - 3
let producto = 3 * 4
let cociente = 20 / 5
let modulo = 5 % 2
let exponente = 3**3

// 2. Crea una variable para cada tipo de operación de asignación, que haga uso de las variables utilizadas para las operaciones aritméticas.
let numero = 10
numero += suma
numero -= resta
numero *= producto
numero /= cociente
numero %= modulo
numero **= exponente

// 3. Imprime 5 comparaciones verdades con diferentes operadores de comparación.

let x = 10
let y = 15

console.log(x<y)
console.log(10<=11)
console.log(10>=10)
console.log(y>=x)
console.log(x!==y)


// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación.

console.log(10==="10")
console.log(10!==10)
console.log(x>=y)
console.log(x*y<=y)
console.log(x===y)


// 5. Utiliza el operador lógico and.
console.log("Operadores lógicos && = AND")
let a = 50
let b = 60
console.log(a<b && a>b && a==b)
console.log(a==50 && b==60 && a!==b)
console.log(20 =="20" && 20<=21 && 30>=55)
console.log("A" == "A" && "E" === "E" && "I" !== "I")
console.log((a*b)>=(a/b) && a<=a)

// 6. Utiliza el operador lógico or.
console.log("Operadores lógicos || = OR")
console.log(1<2 || 2>3)
console.log(20>=21 || 21<=20)
console.log(15<20 || 15>19 || 15>20)
console.log(10===11 || 10==="10" || 9>11)
 

// 7. Combina ambos operadores lógicos.
console.log("Operadores lógicos combinación  && = AND con || = OR")
console.log(2<3 && 3>2 || 0<100)
console.log(10>=20 && 1<2 || 15>16 && 1<=1)
console.log(100<101 || a==="a" || 0 != 0 && 3>2)
let m = 3
let n = 2
console.log(m<n && m>n || m==="n" || (m*n>m) && 0>=0 && n>m || n>m)

// 8. Añade alguna negación.
console.log("Operadores lógicos ! = NOT")
console.log(3!==3)
console.log(!true || false)
console.log(!false || !false && 0!=="0")
console.log(true && true && false && !false || true || !false || false && true || !true && !true)


// 9. Utiliza el operador ternario.
//"despues de ? es true, despues de : false"
console.log("Operador ternario (? :)")
const street = false
street ? console.log("sin trafico"): console.log("Con tráfico")
const edad = false
edad ? console.log("mayor de edad"): console.log("menor de edad")
let prision = false
prision ? console.log("encanao") : console.log("libre")
console.log(true)

// 10. Combina operadores aritméticos, de comparáción y lógicas.
console.log("combinacion de todos:")
aa = 1
bb = 2
cc = 3
dd = 10
console.log(dd**cc<dd+bb || !false && aa-dd<3%1 && dd/bb>a || !dd*cc/bb=="30")