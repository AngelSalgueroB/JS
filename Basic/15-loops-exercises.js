// NOTA: Explora diferentes sintaxis de bucles para resolver los ejercicios.

// 1. Crea un bucle que imprima los nÃºmeros del 1 al 20.
for (let i = 1; i <= 20; i++) {
  console.log(i);
}

// 2. Crea un bucle que sume todos los nÃºmeros del 1 al 100 y muestre el resultado.
sum = 0;
for (let i = 1; i <= 100; i++) {
  sum += i;
}
console.log(sum);

// 3. Crea un bucle que imprima todos los nÃºmeros pares entre 1 y 50.
for (let i = 1; i <= 50; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

// 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola.
let myArray = ["juani", "lucho", "pepe", "chino", "cala", "coca"];
for (let i = 0; i < myArray.length; i++) {
  console.log(myArray[i]);
}

// 5. Escribe un bucle que cuente el nÃºmero de vocales en una cadena de texto.
let vocals = "aeiouAEIOU";
let myString = "Careless Whisper";
count = 0;
for (let i = 0; i <= myString.length; i++) {
  if (vocals.includes(myString[i])) {
    count++;
  }
}
console.log(`Hay ${count} vocales en el string: ${myString}`);

// 6. Dado un array de nÃºmeros, usa un bucle para multiplicar todos los nÃºmeros y mostrar el producto.
myArray = [2, 3, 4, 5, 6];
mult = 1;
for (let i = 1; i <= myArray.length + 1; i++) {
  mult *= i;
}
console.log(mult);

let i = 0;
while (i <= myArray.length) {
  i++;
}
console.log(mult);

// 7. Escribe un bucle que imprima la tabla de multiplicar del 5.
//con for
num = 12;
console.log(`Tabla de multiplicar de ${num}:`);
for (let i = 1; i <= 12; i++) {
  console.log(`${num} x ${i} = ${i * num}`);
}
//con while
num = 11
i = 1
while(i < 12){
    i++
    console.log(`${num} x ${i} = ${i*num}`)
}

// 8. Usa un bucle para invertir una cadena de texto.
myString = "Hola como estas";
let inv = [];
for (let i = myString.length - 1; i >= 0; i--) {
    inv.push(myString[i]);
}console.log(inv.join(''));


// 9. Usa un bucle para generar los primeros 10 nÃºmeros de la secuencia de Fibonacci.

// 10. Dado un array de nÃºmeros, usa un bucle para crear un nuevo array que contenga solo los nÃºmeros mayores a 10.
