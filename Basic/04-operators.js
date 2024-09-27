//Operador ternario (primero porque es el unico que no domino de todos estos)

const isRainning = false
isRainning ? console.log("Está lloviendo") : console.log("No está lloviendo") 
/*
necesita la interrogacion a modo de pregunta, y el formato, en lugar
de un if y else para el si o no...es tipo EXCEL
*/

// Operadores Aritmeticos
let a = 5
let b = 10

console.log("Operadores aritmeticos")
console.log("suma: "+ (a + b))
console.log("resta: "+ (a - b))
console.log("multi: "+ (a * b))
console.log("division: "+ (a / b))

console.log("modulo: "+ (a % b))
console.log("potencia: "+ (a ** b)+ "\n")

// tambien cuenta el ++ o -- es el incremento o decremento

//Operadores de Asignacion =, +=, -=, +=2(incrementa 2), -=...

//Operadores de Comparacion, si comparas 5>10...sera boolean false
//
console.log(a>b)
console.log(a==5) //compara igualdad por valor
console.log(a=="5")// javascript lo diferencia y te da true, si lo es
console.log(a===a)//compara igualdad por tipo y valor true
console.log(a===5)//compara igualdad por tipo y valor true
console.log(a==="5")//compara igualdad por tipo y valor false porque el tipo no es el mismo
// === entra en valor cuando no quieres que tome como mismo tipo de dato una cadena y un numero
/* != tambnien es diferente  */

console.log(a!=5) //false
console.log(a!=="5") //true, ya que compara valor y tipo
console.log(0==false)// 0 es falso en JS
console.log(0==false)// 0 es falso en JS

/*
Truthy values (valores verdaderos)

- Todos los numeros positivos y negativos menos el cero
- Todas las cadenas de texto menos las vacías
- El boolean true
*/

/*
Falsy values (valores falsos)

- 0
-  0n
- null
- undefined
- NaN (Not a Number)
- El boolean false
- Cadenas de texto vacías 
*/

// and (&&)
console.log(5 > 10 && 15 > 20)
console.log(5 < 10 && 15 < 20)
console.log(5 < 10 && 15 > 20)
console.log(5 > 10 && 15 > 20 && 30 > 40)

// or (||)
console.log(5 > 10 || 15 > 20)
console.log(5 < 10 || 15 < 20)
console.log(5 < 10 || 15 > 20)
console.log(5 > 10 || 15 > 20 || 30 > 40)

console.log(5 > 10 && 15 > 20 || 30 < 40)

// not (!)
console.log(!true)
console.log(!false)
console.log(!(5 > 10 && 15 > 20))
console.log(!(5 > 10 || 15 > 20))