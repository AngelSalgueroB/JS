//loops y bucles.

// for.- Ejecutarse y con una condicion que se va a evaluar cada vez que se realiza una iteracion (recorre el bucle), se ejecuta mientras es TRUE, y para cuando es FALSE.
console.log("for..............")
for (let i = 0; i < 5; i++) {                //condicion
    console.log(`hola ${i}`)                //Codigo a repetir
}

const numbers1 = [1, 2, 3, 4, 5, 6, 7]             //elementos de mi array
for (let i = 0; i < numbers1.length; i++) {   //condicion: i es menor a la longitud del indice.
    console.log(`elemento: ${numbers1[i]}`)  //obtengo el elemento + el indice (i)
}

// while.- Evaluarse antes de cada iteracion, si es TRUE continua, si es FALSE termina el bucle. *externa\
console.log("while...........")
let i = 0                       //variable externa
while (i < 5) {                 //condicion
    console.log(`hola ${i}`)    //imprimir 5 veces hola
    i++                         //autoincrementar sino se crea un bucle infinito.
}

//bucle infinito: while(true){}

// do while.- bloque de código se ejecute al menos una vez antes de verificar la condición.
console.log("do while...........")
i = 0
do {
    console.log(`hola ${i}`)
    i++
} while (i < 5)

// For of.- Vale para recorrer de algo que se iterable, como una estructura de datos como uin array, set o maps.
console.log("for of...........")

myArray = [1, 2, 3, 4]

mySet = new Set(["Angel", "Salguero", "Belluz", 46, true, "dd@gg.com"])

myMap = new Map([["name", "Angel"], ["email", "gg@gg.com"], ["age", 46]])

for (let valor of myArray) {
    console.log(valor)
}
for (let valor of mySet) {
    console.log(valor)
}
for (let valor of myMap) {
    console.log(valor)
}

//BUENAS PRACTICAS:

//break and continue
for (let i = 0; i < 10; i++) {                //condicion
    if (i == 5) {         //ignora este elemento 5 y continua
        continue
    } else if (i == 7) {   // solo recorre hasta el 6 y para (break)
        break
    }
    console.log(`hola ${i}`)
}

//ejercicio:
//escribe un programa que calcule la suma de los números del 1 al 10 utilizando un bucle for.
sum = 0
for (let i = 1; i < 11; i++) {
    sum += i
}
console.log(sum)

/*1
 * Escribe un programa que muestre por consola (con un print) los
 * números de 1 a 100 (ambos incluidos y con un salto de línea entre
 * cada impresión), sustituyendo los siguientes:
 * - Múltiplos de 3 por la palabra "fizz".
 * - Múltiplos de 5 por la palabra "buzz".
 * - Múltiplos de 3 y de 5 a la vez por la palabra "fizzbuzz".
 */
// let myArray = new Array(100)
// for(let i = 1; i <= 100; i++){
//    if(i % 15 === 0){
//       console.log(i + " fizzbuzz")
//    }
//    else if(i % 3 === 0){
//       console.log(i + " fizz")
//    }
//    else if(i % 5 === 0){
//       console.log(i + " buzz")
//    }else{
//       console.log(i)
//    }
// }

// FizzBuzzPrime: Escribe un programa que imprima los números del 1 al 100, pero:
// Sustituye los múltiplos de 3 por "fizz".
// Sustituye los múltiplos de 5 por "buzz".
// Sustituye los números primos por "prime".
// Sustituye los múltiplos de 3 y 5 a la vez por "fizzbuzz".

// for (let i = 1; i<=100;i++){
//    if(i%15===0){
//       console.log("fizzbuzz")
//    }else if(i%3===0){
//       console.log("fizz")
//    }else if(i%5===0){
//       console.log("buzz")
//    }else if(i%i===0 && i%1!=i){
//       console.log("prime")
//    }else{
//       console.log(i)
//    }
// }
//1.- Imprimir números del 1 al 10

for (let i = 1; i < 11; i++) {
    console.log(i);
  }
  //2.-Ejercicio 2: Sumar los primeros 10 números
  sum = 0;
  for (i = 1; i < 11; i++) {
    sum += i;
  }
  console.log(sum);
  
  //Ejercicio 3: Imprimir los elementos de un array
  let myArray3 = [11, 22, 78, 33];
  for (let i = 0; i < myArray3.length; i++) {
    console.log(myArray3[i]);
  }
  //Ejercicio 4: Encontrar el número más grande en un array
  let numbers = [2, 3, 11, 5, 30, 0];
  let max = numbers[0];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > max) {
      max = numbers[i];
    }
  }
  console.log(max);
  
  //y el minimo:
  let min = numbers[0];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < min) {
      min = numbers[i];
    }
  }
  console.log(min);
  
  //5.-Crear una tabla de multiplicar
  let digit = 5;
  for (let i = 0; i <= 12; i++) {
    console.log(`${digit} x ${i} = ${digit * i}`);
  }
  
  //Ejercicio 6: Imprimir números pares del 1 al 20
  for (let i = 0; i <= 20; i++) {
    if (i % 2 === 0) {
      console.log(`numero par: ${i}`);
    }
  }
  //Ejercicio 7: Calcular el factorial de un número
  digit = 5;
  fact = 1;
  for (let i = 1; i <= digit; i++) {
    fact *= i;
  }
  console.log(fact);
  
  //Ejercicio 8: Invertir un array
  numbers = [2, 3, 11, 5, 30, 10];
  inv = []
  for (let i = numbers.length - 1; i >= 0; i--) {
     inv.push(numbers[i])
  }console.log(inv)
  
  //Ejercicio 9: Contar las vocales en una cadena
  myArray2 = "Hola, estos días son faciles"
  count = 0
  vocals = "aeiouAEIOU"
   for(let valor of myArray2){
    if(vocals.includes(valor))
      count ++
   }console.log(`vocales: ${count}`)