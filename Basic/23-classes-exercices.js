/*
Clase 6 en vídeo | 15/08/2024
Clases (continuación) y manejo de errores
https://www.youtube.com/live/8p6SLAIgwZI?si=MS9o7qIhezx9NTQX&t=902
*/

// 1 y 2. Crea una clase que reciba dos propiedades y Añade un método a la clase que utilice las propiedades
class Vehiculo {
  constructor(marca, model, CV, year) {
    this.marca = marca
    this.model = model
    this.CV = CV
    this.year = year
  }

  infoVehiculo() {
    return `el coche es ${this.marca} ${this.model} del año ${this.year}, con una potencia de ${this.CV} `
  }

  static calcularVelocidad(CV) {
    let vel = CV * 1.57
    return `La velocidad máxima del ${this.marca} ${this.model} es ${vel}`
  }
}
Vehiculo.prototype.toString = function cocheToString() {
  let mostrarDatos = `\nmarca: ${this.marca}\n modelo: ${this.model} \n año: ${this.year} \n CV: ${this.CV} `
  return mostrarDatos
}

// 3. Muestra los valores de las propiedades e invoca a la función
let coche1 = new Vehiculo("Citroen", "C4 Picasso", 150, 2017)
console.log(coche1.marca)
console.log(coche1.model)
console.log(coche1.year)
console.log(coche1.CV)
console.log(coche1.infoVehiculo())

console.log(coche1.toString())

// 4. Añade un método estático a la primera clase
console.log(Vehiculo.calcularVelocidad(57))
// 5. Haz uso del método estático

// 6. Crea una clase que haga uso de herencia
class Moto extends Vehiculo {
  constructor(marca, model, CV, year, carcasa) {
    super(marca, model, CV, year) // no poner el this
    this.carcasa = carcasa
  }
}

let myMoto = new Moto("yamaha", "CBR", 135, 2015, "carcasa1")

console.log(myMoto)
// 7 y 8 Crea una clase que use propiedades privadas y que haga uso de getters y setters
class Persona {
  #name
  #surname
  #dni
  #telefono
  constructor(name, surname, dni, telefono) {
    this.#name = name
    this.#surname = surname
    this.#dni = dni
    this.#telefono = telefono
  }

  mostrarDatos() {
    console.log(`Nombre: ${this.#name}`)
    console.log(`Apellido: ${this.#surname}`)
    console.log(`DNI: ${this.#dni}`)
    console.log(`Telefono: ${this.#telefono}`)
  }

  get name() {
    return this.#name
  }
  get surname() {
    return this.#surname
  }
  get telefono() {
    return this.#telefono
  }
  get dni() {
    return this.#dni
  }

  set name(nuevoName) {
    console.log(
      `Has cambiado el nombre ${this.#name}, por el nuevo nombre ${nuevoName}`
    )

    this.#name = nuevoName
  }

  set telefono(newPhone) {
    this.#telefono = newPhone
  }
}

// 9. Utiliza los get y set y muestra sus valores

let personita = new Persona("Sullyvan", "Monsters", "12345SA", 555112233)
console.log(personita.name)
console.log(personita.dni)
personita.name = "Crash"

personita.mostrarDatos() //con este metodo es mas efectivo

// 10. Sobrescribe un método de una clase que utilice herencia ( Sobreescribir el metodo infoVehiculo)

class Patin extends Vehiculo {
  constructor(marca, model, CV, year, manillar) {
    super(marca, model, CV, year)
    this.manillar = manillar
  }
  infoVehiculo() {
    return "Al ser un patin, pues no es un coche con infoCoche"
  }
}

let mypatin = new Patin("JJ", "HH", 10, 2005, "Especial")

console.log(mypatin)
console.log(mypatin.infoVehiculo())
