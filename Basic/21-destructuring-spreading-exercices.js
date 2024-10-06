// 1. Usa desestructuración para extraer los dos primeros elementos de un array
let tuArray = [1, 2, 3]

let [tuValue0, tuValue1] = tuArray
console.log(tuValue0)
console.log(tuValue1)

// 2. Usa desestructuración en un array y asigna un valor predeterminado a una variable
let [tuValue2, tuValue3, tuValue4, tuValue5 = "hola"] = tuArray
console.log(tuValue2)
console.log(tuValue3)
console.log(tuValue4)
console.log(tuValue5)
// 3 y 4 Usa desestructuración para extraer dos propiedades de un objeto y asígnalas
// a nuevas variables con nombres diferentes

let mueble = {
  nombre: "mesa redonda",
  uso: "comer",
  patas: 1
}

let { nombre: nombre7, uso: uso7 } = mueble
console.log(nombre7)
console.log(uso7)

// 5. Usa desestructuración para extraer dos propiedades de un objeto anidado
let persona1 = {
  nombre: "sullivan",
  apellido: "strage",
  comer: {
    masticar: "masticando",
    tragar: "tragando"
  }
}

let {
  comer: { masticar },
  comer: { tragar }
} = persona1 //bien pero falle en encerrar con llaves masticar y traf¡gar
console.log(masticar)
console.log(tragar)

// 6. Usa propagación para combinar dos arrays en uno nuevo
let tuArray2 = [4, 5, 6]

let tuArray3 = [...tuArray, ...tuArray2]
console.log(tuArray)
console.log(tuArray2)
console.log(tuArray3)
// 7. Usa propagación para crear una copia de un array
let tuArray4 = [...tuArray3]
console.log(tuArray4)

// 8. Usa propagación para combinar dos objetos en uno nuevo
let mueble1 = {
  name: "silla",
  patas: 3
}
let mueble2 = {
  material: "madera",
  precio: 100
}

let muebleMix = { ...mueble1, ...mueble2 }
console.log(muebleMix)
// 9. Usa propagación para crear una copia de un objeto

let muebleMix3 = {...muebleMix}

// 10. Combina desestructuración y propagación

let elObject = {
    nombre9:"objeto",
    tipo9:"madero",
    precio9: 7,
    usabilidad9: false
}
let {nombre9,precio9,usabilidad9}= elObject
let objectProp= {nombre9,precio9,usabilidad9,sostenibilidad: 3}

console.log(objectProp)
