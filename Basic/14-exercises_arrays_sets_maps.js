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
let myArray = [11, 22, 78, 33];
for (let i = 0; i < myArray.length; i++) {
  console.log(myArray[i]);
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
myArray = "Hola, estos días son faciles"
count = 0
vocals = "aeiouAEIOU"
 for(let valor of myArray){
  if(vocals.includes(valor))
    count ++
 }console.log(`vocales: ${count}`)

