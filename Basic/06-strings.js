
//Strings

// Concatenación

let myName = "Jonatan"
let greeting = "Hola, " + myName + "!"
console.log(greeting)
console.log(typeof greeting)

// Longitud

console.log(greeting.length)

// Métodos comunes

console.log(greeting.toUpperCase()) // Mayúsculas
console.log(greeting.toLowerCase()) // Minúsculas
console.log(greeting.indexOf("Hola")) // Índice del primer elemento de la palabra
console.log(greeting.indexOf("Jonatan"))//Jonatan empieza en el 6
console.log(greeting.indexOf("MoureDev")) // Mouredev -1 porque no existe
console.log(greeting.includes("Hola")) // Incluye
console.log(greeting.includes("Brais"))
console.log(greeting.includes("MoureDev"))
console.log(greeting.slice(0, 10)) // imprime entre el indice 0,10
console.log(greeting.replace("Jonatan", "JoseJonatan")) // Reemplazo

// Strings en varias líneas
let message = `Hola, este
es mi
curso de
JavaScript...de momento es muy facil...similar todo a java`// se hace con acento invertidpo
console.log(message)


// Interpolación de valores
let email = "braismoure@mouredev.com"
/*para poder meter las variables a cadenas, tal como en el Formu del examen
lleva el acento invertido la cadena tambien, y la variable con el ${}
*/
console.log(`Hola, ${myName}! Tu email es ${email}.`)
