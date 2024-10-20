//CONSOLE

console.log("Esto es un console.log NORMAL")
console.info("Mensaje de info adicional")
console.warn("Esto es un mensaje de advertencia, que no llega a ser un error")
console.error("Esto es un console.error")
console.error(
  "Error en conex con DB y mostramos la traza",
  new Error("Fallo de conexion")
) //muestra la traza

//table, para formatear datos

let dataSimple = [
  ["Jonatan", 37],
  ["Sandra", 34],
  ["Liam", 4]
]

console.table(dataSimple)

//mejoramos y lo hacemos con columnas

let data = [
  { name: "Jonatan", apellido: "Gomez", edad: 37 },
  { name: "Sandra", apellido: "Nieves", edad: 34 },
  { name: "Liam", apellido: "Gomez Nieves", edad: 4 }
]

console.table(data)

// GROUP (group y gropEnd) sirve para mostrar datos

console.group("Usuario:") // se inicia un grupo...y todo lo que metamos va a ese group

console.log("Nombre: Jonatan")
console.log("Edad: 37")
console.log("Futuro desarrollador de AppWebs")

console.groupEnd("Usuario") // finalizamos el grupo con el mismo nombre

//TIME ( para medir cuanto tarda en ejecutar el codigo)

console.time("Medicion del tiempo de bloque1")

for (let i = 0; i < 10000; i++) {}

console.time("Medicion del tiempo de bloque2")

for (let i = 0; i < 10000; i++) {}

console.timeEnd("Medicion del tiempo de bloque2")
console.timeEnd("Medicion del tiempo de bloque1")
// importantisimo darle el mismo nombre para que sepa cual parar si hay varios en funcionamiento

//ASSERT ( Muestra mensaje de error si lo que evalua es falso)

let age = 18
console.assert(age >= 18, "El usuario debe ser mayor de edad.") // condicion y mensaje si hay error --> en este caso no saldra nada

let age2 = 17
console.assert(age2 >= 18, "El usuario debe ser mayor de edad2.") // condicion y mensaje si hay error --> en este caso no saldra nada



// COUNT ( cuenta la cantidad de veces que se usa una tag o linea de codigo especifica)

console.count("Click")
console.count("Click")
console.count("Click")
console.countReset("Click")  //restablece el contador
console.count("Click")

//contar iteraciones de un bucle

for (let i = 0; i < 9; i++) {
  console.count("iteration nº")
  
}

//TRACE, (muestra el seguimiento de la pila la ejecucion)

function funcA(){
  console.log("llamaremos a la FUNC B para que esta saque la traza")
  funcB()
}

function funcB(){
  //sacamos la traza
  console.trace("Seguimiento de ejecucion")
}


funcA()

//Clear borra el terminal

console.clear()


