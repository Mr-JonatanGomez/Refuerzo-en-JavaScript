/*
Clase 4 en vídeo | 31/07/2024
Mapas, bucles y funciones
https://www.youtube.com/live/xg1GeHKiNzU?si=oiWHK8bDTZ1c98hF&t=885
*/

// 1. Crea un array que almacene cinco animales
let animales = []
animales.push("Leon")
animales.push("Elefante")
animales.push("Tigre")
animales.push("Ballena")
animales.push("Aguila")
console.log(animales)
// 2. Añade dos más. Uno al principio y otro al final
/*
animales.slice(0) crea una copia de todos los elementos del array original.
Luego, simplemente concatenamos el nuevo elemento pájaro al principio usando concat.
*/
animales.slice(0)
animales = ["Camello"].concat(animales.slice(0))
animales.push("Cobra")
console.log(animales)
console.log(animales.length)
// 3. Elimina el que se encuentra en tercera posición

console.log(animales[3] + " Será eliminado")
animales.splice(3, 1)
console.log(animales)
// 4. Crea un set que almacene cinco libros
let books = new Set([
  "IT",
  "13",
  "Los hombres que no amaban a las mujeres",
  "Misery",
  "Joyland",
])
console.log(books)
// 5. Añade dos más. Uno de ellos repetido
books.add("Misery")
books.add("Los Pilares de la Tierra")
console.log(books)

// 6. Elimina uno concreto a tu elección
books.delete("13")
console.log(books)

// 7. Crea un mapa que asocie el número del mes a su nombre
let meses = new Map()
meses = new Map([
  [1, "enero"],
  [2, "febrero"],
  [3, "marzo"],
  [4, "abril"],
  [5, "mayo"],
  [6, "junio"],
  [7, "julio"],
  [8, "agosto"],
  [9, "septiembre"],
  [10, "octubre"],
  [11, "noviembre"],
  [12, "diciembre"],
])

console.log(meses)
// 8. Comprueba si el mes número 5 existe en el map e imprime su valor
console.log(meses.has(5))
console.log(meses.get(5))
// 9. Añade al mapa una clave con un array que almacene los meses de verano
meses.set("verano", "julio, agosto, septiembre")
console.log(meses.get("verano"))
// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map
let arrayTrans = ["Fulano", "Mengano", "Propano"]
console.log(arrayTrans)

let setFromArray = new Set(arrayTrans)
console.log(setFromArray)

let mapFromSetAndArray = new Map()
mapFromSetAndArray.set("nombrillos", setFromArray)
console.log(mapFromSetAndArray)
