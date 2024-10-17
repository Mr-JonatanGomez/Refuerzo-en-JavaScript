//exceptions

/* Al igual que en java, son para que el programa no deje de funcionar */
/* ESTO CAUSARIA UN EXCEPTION porque no hay un email declarado que imprimir*/

let myObject
//console.log(myObject.email)

//TRY CATCH FINALLY

try {
  console.log(myObject.email) //no falla porque si hay error lo captura
  console.log("Fin ejecucion") //no falla porque si hay error lo lleva al catch
} catch {
  console.log("Hubo un error, capturado")
}

//CAPTURA DEL ERROR

try {
  console.log(myObject.email) //no falla porque si hay error lo captura
  console.log("Fin ejecucion") //no falla porque si hay error lo lleva al catch
} catch (error) {
  console.log("Hubo un error, capturado", error.message)
} finally {
  console.log("Finally, siempre se ejecutara, con o sin error")
}

//LANZAR ERRORES throw DECLARAR ERROR PERSONALIZADO

class SumZeroIntegerError extends Error{
    constructor(message, a, b) {
        super(message)
        this.a
        this.b
    }
    printNumbers(){
        console.log(this.a, " + ", this.b)
    }
}

function sumInteger(a, b) {
if(typeof a !== "number" || typeof b !== "number"){
    throw new TypeError("Esta operacion solo puede sumar numeros")
}if (!Number.isInteger(a) || !Number.isInteger(b)) {
    throw new Error("Esta operacion solo puede sumar Enteros")
}
if (a == 0 && b== 0) {
    throw new SumZeroIntegerError(" se esta intendando sumar cero", a, b)
}
return a+b
}

try {
    console.log(sumInteger(0,0)) 
} catch (error) {
    console.log(error.message)
}



//throw new Error("Error alanzado")
