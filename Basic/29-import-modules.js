//IMPORTACION DE MODULOS( podemos importar funciones desde otros ficheros)

//funciones ( al elegir add, se autocompletara el import) ---> import { add } from "./28-export-modules";

import { add, PI ,Circle} from "./28-export-modules.js"//se puede hacer con variables, funciones....
import cambioNombreResta from "./28-export-modules.js"

// OPCION NODE.JS  (SOLO EN En IDE, no en EXPLORADOR)
//poner el nombre de los ficheros como .mjs   tanto el importacion como el que exporta

//OPCION SCRIPT
// mediante un SCRIPT, usado sobre todo para WEB

//OPCION PACKAGE.JSON con la definicion de un modulo

//aqui usaremos el package que es mas habitual


//FUNCIONES

console.log(add(3,9))

//PROPIEDADES

console.log(PI)


//CLASES
let myCircle = new Circle(10)

console.log(myCircle.radius)
console.log(myCircle.calcArea().toFixed(2))// toFixed fija el numero de decimales
console.log(myCircle.calcPerim().toFixed(2))

//Import default

console.log(cambioNombreResta(3,5))//el default puede cambiarse el nombre, al solo poder existir uno, no habra conflicto


//PROYECTO MODULAR

//import {MyClass} from "./directorio/fichero.js" con el copy path route coger directorio de donde esta la class


//MODULOS EXTERNOS
//con node hay un modulo para trabajar con el SO, que se llama OS

const os = require("os")

console.log(os.platform)