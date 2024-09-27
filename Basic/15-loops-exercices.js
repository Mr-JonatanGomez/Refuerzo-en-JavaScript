/*
Clase 4 en vídeo | 31/07/2024
Mapas, bucles y funciones
https://www.youtube.com/live/xg1GeHKiNzU?si=oiWHK8bDTZ1c98hF&t=885
*/

// NOTA: Explora diferentes sintaxis de bucles para resolver los ejercicios

// 1. Crea un bucle que imprima los números del 1 al 20

for (let i = 0; i <= 19; i++) {
  console.log(i + 1)
}
// 2. Crea un bucle que sume todos los números del 1 al 100 y muestre el resultado

let numeroAc = 0
const numeroFinal = 100

for (let i = 0; i < numeroFinal; i++) {
  numeroAc += i + 1
}
console.log(
  `La suma de todos los numero del 1 al ${numeroFinal}, da un total de ${numeroAc}`
)

// 3. Crea un bucle que imprima todos los números pares entre 1 y 50
//es absurdo crear hasta el 50...
console.log("\n Pares")
let numero = 1
for (let i = 0; i < 10; i++) {
  if (numero % 2 == 0) {
    console.log(numero)
  }
  numero++
}

// 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola
console.log("Recorriendo los items de un array")

let nombres = ["Jonatan", "Sandra", "Liam"]
for (let items of nombres) {
  console.log(items)
}

// 5. Escribe un bucle que cuente el número de vocales en una cadena de texto
let frase = "Liam sale del colegio a las 12:00" //11
let vocales = ["a", "e", "i", "o", "u"]
let contador = 0

for (let i = 0; i < frase.length; i++) {
  let actual = frase[i].toLowerCase() //convierte a min para leer todas por si acaso

  for (let element of vocales) {
    if (element == actual) {
      contador++
      break
    }
  }
}
console.log(frase.length)
console.log(`El numero de vocales de la frase es ${contador}`)

// 6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto
let numeros = [1, 2, 5, 4, 7]
numeroAc = 1

for (let i = 0; i < numeros.length; i++) {
  numeroAc *= numeros[i]
}
console.log(
  `La multi de todos los numeros del array, da un total de ${numeroAc}`
)

// 7. Escribe un bucle que imprima la tabla de multiplicar del 5
const maxMultiplo = 10
let numeroTabla = 5
for (let i = 0; i < maxMultiplo; i++) {
  let result = numeroTabla * (i + 1)
  console.log(`${numeroTabla} x ${i + 1} = ${result}`)
}

// 8. Usa un bucle para invertir una cadena de texto

let cadena = "Liam sale del colegio a las 12:00"
//mi forma que se me ocurrio
/*
for (let index = cadena.length; index >= 0; index--) {
  console.log(cadena[index])
  
}
*/
//la que no se me ocurrio
let invertida = ""
for (let index = cadena.length - 1; index >= 0; index--) {
  invertida += cadena[index]
}
console.log(invertida)
// 9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci
let actual
let anterior1 = 0
let anterior2 = 1
let fibonacci = new Set()
fibonacci = new Set([0, 1])

for (let i = 0; i < 10; i++) {
  actual = anterior2 + anterior1
  fibonacci.add(actual)
  anterior1 = anterior2
  anterior2 = actual
}

console.log(fibonacci)

//el set no recoge la secuencia real porque no admite duplicados, y no coge el segundo 1

actual
anterior1 = 0
anterior2 = 1
let fibonacciArray = [0, 1]

while (fibonacciArray.length < 10) {
  actual = anterior2 + anterior1
  fibonacciArray.push(actual)
  anterior1 = anterior2
  anterior2 = actual
}

console.log(fibonacciArray)
//falta corregir en el bucle para que solo admita 10 pos en array

// 10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10

let nums = [2,6,9,15,35,4,10,12,17,99,124,1,0]
let mayores10 = []
for (let items of nums) {
  if (items>10) {
    mayores10.push(items)
  }
}
console.log(mayores10)
