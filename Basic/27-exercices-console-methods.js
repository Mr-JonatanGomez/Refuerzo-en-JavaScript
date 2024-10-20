// 1. Crea un función que utilice error correctamente
let edadParticipante1 = 1

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
    console.log(
      "El participante tiene 18 justos y será evaluado para poder concursar"
    )
  } else if (edad < 18) {
    throw new edadIlegal("El participante no tiene 18, y por tanto no cumole requisitos")
  }
}

try {
    comprobarEdadTorneo(edadParticipante1)
} catch (error) {
    if (error instanceof edadIlegal) {
        console.log(error.message)
    }
} finally {
    console.log("FIN DE EJERCICIO 1")
}

// 2. Crea una función que utilice warn correctamente

// 3. Crea una función que utilice info correctamente

// 4. Utiliza table

// 5. Utiliza group

// 6. Utiliza time

// 7. Valida con assert si un número es positivo

// 8. Utiliza count

// 9. Utiliza trace

// 10. Utiliza clear
