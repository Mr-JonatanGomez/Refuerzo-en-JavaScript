// 1. Captura una excepción utilizando try-catch y utilizando try-catch y finally

try {
  console.log(chapa)
} catch (error) {
  console.log("no hay chapa definida. " + error.message)
} finally {
  console.log("Finalizando programa")
}

// 3. Lanza una excepción genérica
let a = 10
let b = 0
let resultado = a / b
try {
  if (b == 0) {
    throw new Error("el divisor no puede ser 0")
  }

  console.log("Resultdao: ", resultado)
  //NO SALE...PROBAR
} catch (error) {
  console.log(error.message)
} finally {
  console.log("Fin ejercicio\n")
}
// 4. Crea una excepción personalizada

class DivisionZero extends Error {
  constructor(message) {
    super(message)
    this.name = DivisionZero
  }
}
class DivisionLetra extends TypeError {
  constructor(message) {
    super(message)
    this.name = DivisionLetra
  }
}

// 5. Lanza una excepción personalizada

function dividir(c, d) {
  if (d === 0) {
    throw new DivisionZero("el divisor no puede ser 0")
  }
  if (typeof a != Number || typeof b != Number) {
    throw new DivisionLetra("el divisor no puede ser NO NUMERO")
  }if (c==0 && d==0) {
    
  }
  return c / d
}

try {
 // console.log(dividir(2, 0)) //activar para error DivisionZero
  console.log(dividir(2, "a")) //activar para error DivisionZero
  console.log

} catch (error) {
  if (error instanceof DivisionZero)
    console.log("Error DivisionZero", error.message)

  if (error instanceof DivisionLetra)
    console.log("Error DivisionLetra", error.message)
} finally {
  console.log("ending exercise 5")
}

// 8. Crea un bucle que intente transformar a float cada valor y capture y muestre los errores

// 9. Crea una función que verifique si un objeto tiene una propiedad específica y lance una excepción personalizada

// 10. Crea una función que realice reintentos en caso de error hasta un máximo de 10
