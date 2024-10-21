//EXPORTACION DE MODULOS ( para ejecutar desde otros ficheros, que tendran que importarla)

// funciones

export function add(a, b) {
  return a + b
}

//PROPIEDADES

export const PI = 3.1416

// al import le agregaremos separado por comas la constante PI--->  import { add, PI } from "./28-export-modules.js"

//EXPORTACION POR DEFECTO no necesita llamarse igual al importarlo, pero solo puedes tener UN DEFAULT (SOLO CLASS Y FUNCT)

export default function resta(a, b) {
  return a - b
}

export default class myClass(){
    funcA(){
        console.log("clase exportada")
    }
}

//CLASES

export class Circle{
    constructor(radius){
        this.radius=radius
    }
    calcArea(){
        return Math.PI * Math.pow(this.radius, 2)
    }
    calcPerim(){
        return Math.PI * 2 * this.radius
    }
}
