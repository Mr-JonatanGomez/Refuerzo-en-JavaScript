//String
let myName="Jonatan"
let alias="Jony"

// Number
let age = 37 // Entero
let height = 1.77 // Decimal

// Booleanos (boolean)
let isTeacher = false
let isStudent = true

// Undefined
let undefinedValue // no tiene valor definido, si la imprimimos, saldra como indefinido
let trabajoFuturo
console.log(undefinedValue)

// Null
let nullValue= null // variable nula intencionadamente

// Symbol

let mySymbol = Symbol ("mysymbol")
/*lo instanciamos con Symbol, y es para valor unico usado como
identificador de propiedades de futuros objetos
*/


// BigInt, para numeros demasiado largos, que no cabe en un number

let myBigInt = BigInt(817239871289371986589716389471628379612983761289376129)
let myBigInt2 = 817239871289371986589716389471628379612983761289376129n

// Mostramos los tipos de datos
console.log(typeof myName)
console.log(typeof alias)


console.log(typeof age)
console.log(typeof height)

console.log(typeof isTeacher)
console.log(typeof isStudent)

console.log(typeof undefinedValue)

console.log(typeof nullValue)

console.log(typeof mySymbol)

console.log(typeof myBigInt)
console.log(typeof myBigInt2)