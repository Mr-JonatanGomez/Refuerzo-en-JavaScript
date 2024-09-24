// SET (similar al ArrayList de Java)
//declaracion
let mySet = new Set()

//iicializacion
mySet = new Set(["Jonatan", "Gomez", "JongoDev", 37, "Jon@mail"]) //meterle los corchetes, si no no lo coge correctamente
console.log(mySet)

//metodos comunes

// add y delete para añadir o borrar datos
mySet.add("https//jonatan.dev") // añade al final
console.log(mySet)

/*
mySet.delete("https//jonatan.dev")// hay que pasarle exacto lo que quieres, no un indice
console.log(mySet) // añade al final
*/

console.log(mySet.delete(37)) // devuelve TRUE si borra  o FALSE si no borra
console.log(mySet)

//HAS
//para comprobar si existe un elemento
console.log(mySet.has("Jonatan"))
console.log(mySet.has("JongoDev"))
console.log(mySet.has("JongoDeV"))

// SIZE para longitud

console.log("El tamaño del set es " + mySet.size)

//convertir un set a Array??

let myArray = Array.from(mySet)
console.log(myArray)

//convertir Array a Set

mySet = new Set(myArray)
console.log(mySet)

// LOS SET NO ADMITE DUPLICADOS