//Array y declaracion

//EN JS no es obligatorio decirle cuantos  huecos tiene el array como en java

let myArray = [] // aqui corchetes, van datos
let myArray2 = new Array() // aqui en parentesis reservamos las posiciones del array

//estas dos opciones son iguales, pero  en JS se recomienda la primera

//Inicializacion

myArray = [3, 8] // aqui corchetes, lleva el dato 3 y el 8
myArray2 = new Array(3) // aqui reserva 3 huecos y esta vacio

console.log(myArray) // resultado [ 3, 8 ]
console.log(myArray2) // resultado[ <3 empty items> ]

let myArray3 = [1, 8, "Sandra"]
let myArray4 = new Array(3, 4, 9, "holo", true) // si lo metes en parentesis varios numeros, pues funciona como los corchetes
/* POR ESO ES MAS CONFUSO este modo */

console.log(myArray3)
console.log(myArray4)

//reasignar valores... myArray 3, su valor 2 es Sandra, lo vamos a cambiar por Pepon
console.log(myArray3) // resultado
myArray3[2] = "Pepon"
console.log(myArray3) // resultado

// METODOS COMUNES

myArray = [] // inicializado de nuevo a cero para limpiarlo

//PUSH , POP , SHIFT

//PUSH para meterle datos al array
myArray.push("Jonatan")
myArray.push("Gomez")
myArray.push("JongoDev")
myArray.push(37)

console.log(myArray)

//POP elimina el ultimo elemento del array
myArray.pop() // Pop elimina el ultimo
console.log(myArray) // comprobamos que ha eliminado 37
console.log(myArray.pop()) // ahora elimina el ultimo JongoDev, y lo imprime antes de devolverlo

//SHIFT elimina el primer elemento del array
console.log(myArray.shift()) //nos quedaba Jonatan Gomez, nos devuelve Jonatan y deja el array con Gomez
console.log(myArray)
console.log(myArray.length) //imprimir long de array

//Borrar el Array es iniciarlo a vacio o darle longitud 0

//SLICE & SPLICE
//SLICE es para seleccionar solo las posiciones que quieras, para darselas a otro array o lo que quieras

myArray = ["Jonatan", "Gomez", "JongoDev", 37, "Jon@mail"]
let myArray5 = myArray.slice(1, 3) // cogera desde el 1 al 3, sin incluir el 3

console.log(myArray5)

//SPLICE es para eliminar elementos

//myArray = ["Jonatan", "Gomez", "JongoDev", 37,"Jon@mail" ]
myArray.splice(1, 3) // POSICION QUE EMPIZAS, Nº ELEMENTOS A ELIMINAR
console.log(myArray) // se cargara 3 elementos, desde la posicion 1 (incluida)

myArray = ["Jonatan", "Gomez", "JongoDev", 37, "Jon@mail"]
console.log(myArray)
myArray.splice(1, 2, "Splice in 3") // start pos1(include) remove 2 elememts, add "splice in 3" in this place
console.log(myArray)