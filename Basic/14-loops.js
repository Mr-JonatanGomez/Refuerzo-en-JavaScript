//LOOPS o Bucles

//for
console.log("Saludar 5 veces")
for (let i = 0; i < 5; i++) {
  //console.log("Hola este es el saludo numero "+ (i+1)) //asi en JAVA
  console.log(`Hola, este es el saludo  ${i + 1}`) //asi en JAVA
}

const numbers = [1, 2, 3, 4, 5]
for (let i = 0; i < numbers.length; i++) {
  //console.log("Hola este es el saludo numero "+ (i+1)) //asi en JAVA
  console.log(`Elemento ${i + 1}`) //asi en JS
}

// WHILE, se evalua antes de cada iterancia y se ejecuta mientras sea Verd. si no, termina
// puede ejecutarse 0 veces...o muchas

let i = 1
while (i <= 5) {
  console.log(`ElementoWhile ${i}`)
  i++
}

//do while
// se ejecuta DO una vez como minimo, y si sigue cumpliendo el while, lo seguira ejecutando

i = 6

do {
  console.log(`Hola_Do-While ${i}`)
} while (i < 5)

//for of
//recorre valores iterables

myArray = [1, 2, 3, 4]

mySet = new Set(["Jonatan", "Gomez", "jony", 37, true, "jonatan@mail.com"])

myMap = new Map([
  ["name", "Jonatan"],
  ["surname", "Gomez"],
  ["age", 37],
])

myString = "Hola JavaScript!"

for (let valores of myArray) {
  // poner const o let segun, luego nombre azar, y el que recorres
  console.log(valores) //let-valores-of-myArray/mySet/myMap
}

for (let valores of mySet) {
  // poner const o let segun, luego nombre azar, y el que recorres
  console.log(valores) //let-valores-of-myArray/mySet/myMap
}

for (let valores of myMap) {
  // poner const o let segun, luego nombre azar, y el que recorres
  console.log(valores) //let-valores-of-myArray/mySet/myMap
}

for (let valores of myString) {
  // poner const o let segun, luego nombre azar, y el que recorres
  console.log(valores) //let-valores-of-myArray/mySet/myMap
}


//BUenas Practicas
//break y continue

for (let i = 0; i < 10; i++) {
  if (i == 5) {// si el indice vale 5 no se tiene en cuenta, con lo que no imprimira
      continue
  } else if (i == 7) {
      break
  }
  console.log(`Hola ${i}`)
}