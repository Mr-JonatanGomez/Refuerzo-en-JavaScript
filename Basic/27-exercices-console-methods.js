// 1. Crea un función que utilice error correctamente
// 2. Crea una función que utilice warn correctamente
// 3. Crea una función que utilice info correctamente
console.time("ejercicios del 1 al 5")

let edadParticipante1 = 18

class edadIlegal extends Error {
  constructor(message, edad) {
    super(message)
    this.edad = edad
  }
}

function comprobarEdadTorneo(edad) {
  if (edad > 18) {
    console.log("El participante es mayor de edad y puede concursar")
  } else if (edad === 18) {
    console.warn(
      "El participante tiene 18 justos y será evaluado para poder concursar"
    )
  } else if (edad < 18) {
    throw new edadIlegal(
      "El participante no tiene 18, y por tanto no cumole requisitos"
    )
  }
}

try {
  comprobarEdadTorneo(edadParticipante1)
} catch (error) {
  if (error instanceof edadIlegal) {
    console.error(error.message)
  }
} finally {
  console.log("FIN DE EJERCICIO 1")
  console.log(
    "Este mensaje muestra info adicional sobre las condiciones\n +18 : Ok\n =18 : A revision\n <18 : Rechazado"
  )
}
// 4. Utiliza table

let miTablilla = [
  { Nombre: "Jonatan", Apellido: "Gomez", Edad: 37, Salario: 24000 },
  { Nombre: "Sandra", Apellido: "Nieves", Edad: 34, Salario: 18000 },
  { Nombre: "Liam", Apellido: "Gomez Nieves", Edad: 4, Salario: 0 }
]

console.table(miTablilla)

// 5. Utiliza group
console.group("Usuarios")
console.log("Jon")
console.log("San")
console.log("LGN")
console.groupEnd("Usuarios")

console.log("Users FINALIZADOS")

// 6. Utiliza time

console.timeEnd("ejercicios del 1 al 5")
// 7. Valida con assert si un número es positivo
let resultado

function sum(num, num2) {
  resultado = num + num2
  return resultado
}

sum(3, -7)
console.log(resultado)
console.assert(resultado >= 0, " El numero es negativo")

/* SIMPLE
let num = -7
console.assert(resultado>= 0, " El numero es negativo") 
*/

// 8. Utiliza count
for (let i = 0; i < 3; i++) {
  console.count("iteration nº")
  console.trace("seguim")
  
}
// 9. Utiliza trace
console.clear()
// 10. Utiliza clear
