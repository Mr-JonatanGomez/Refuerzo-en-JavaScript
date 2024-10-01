//console.clear()
//EJERCICIOS FUNCTIONS
/*
Clase 4 en vídeo | 31/07/2024
Mapas, bucles y funciones
https://www.youtube.com/live/xg1GeHKiNzU?si=oiWHK8bDTZ1c98hF&t=885
*/

// NOTA: Explora diferentes sintaxis de funciones para resolver los ejercicios

// 1. Crea una función que reciba dos números y devuelva su suma
let resultado
function suma(a, b, c) {
  return a + b + c
}

console.log(suma(15, 10, 5))
// 2. Crea una función que reciba un array de números y devuelva el mayor de ellos
let myArray = [1, 5, 3, 2, 4, 15, 9]

myArray.sort(function (a, b) {
  return a - b // esto compara a con b, y si A es negativo se coloca antes si es positivo se coloca B primero
})

console.log(myArray[myArray.length - 1])
// 3. Crea una función que reciba un string y devuelva el número de vocales que contiene

//hacer con for o for of
let myString = "Hola, yo soy Jonatan, futuro developer (14 VCLS)"
const vocales = ["a", "e", "i", "o", "u"]
let contadorVocales = 0
function numVocales(string) {
  for (let i = 0; i < string.length; i++) {
    if (vocales.includes(string[i])) {
      contadorVocales++
    }
  }
  console.log(`El contador de vocales ha dado ${contadorVocales}`)
}
numVocales(myString)

// 4. Crea una función que reciba un array de strings y devuelva un nuevo array con las strings en mayúsculas
let str1 = ["Jose Jonatan", "Sandra", "Liamcillo"]
let strConvert = []
function convertirAMayusculas(array) {
  for (let i = 0; i < array.length; i++) {
    strConvert.push(array[i].toUpperCase())
  }
  return strConvert
}
strConvert = convertirAMayusculas(str1)
console.log(strConvert)

// 5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario
//divisible por 1 y si mismo
function primoNoPrimo(numero) {
  if (numero % numero == 0 && numero % 1 == 0) {
    //podria ser primo, pero no tiene porque serlo

    for (let i = 0; i < numero; i++) {
      resultadoMomentaneo = numero % i

      if (i == 1) {
        continue
      }

      if (resultadoMomentaneo === 0) {
        console.log(`al dividir ${numero}, entre  ${i}, dio 0 ya no es primo`)
        return false
      }
    }
    console.log(`El ${numero}, solo es divisible entre 1 y si mismo, es primo`)

    return true
  }
}
console.log(primoNoPrimo(8))
console.log(primoNoPrimo(11))
console.log(primoNoPrimo(521))

// 6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos
//MUY GUAPO ESTE

let comunArray = []
function comunesEntreArrays(array1, array2) {
  for (const items of array1) {
    if (array2.includes(items)) {
      comunArray.push(items)
    }
  }
  console.log(comunArray)
}

comunesEntreArrays(["hola", "tio", 5, 1, 2], ["tio", "macario", 5, 3, 0, 1])
// 7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares

// 8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado

// 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso

// 10. Crea una función que calcule el factorial de un número dado
