/*
Clase 6 en vídeo | 15/08/2024
Clases (continuación) y manejo de errores
https://www.youtube.com/live/8p6SLAIgwZI?si=MS9o7qIhezx9NTQX&t=902
*/

// 1 y 2. Crea una clase que reciba dos propiedades y Añade un método a la clase que utilice las propiedades
class Coche {
  constructor(marca, model, CV, year) {
    this.marca = marca
    this.model = model
    this.CV = CV
    this.year = year
  }

  infoCoche() {
    return `el coche es ${this.marca} ${this.model} del año ${this.year}, con una potencia de ${this.CV} `
  }
}

// 3. Muestra los valores de las propiedades e invoca a la función
let coche1 = new Coche("Citroen", "C4 Picasso", 2017, 150)
console.log(coche1.marca)
console.log(coche1.model)
console.log(coche1.year)
console.log(coche1.CV)
console.log(coche1.infoCoche())

// 4. Añade un método estático a la primera clase

// 5. Haz uso del método estático

// 6. Crea una clase que haga uso de herencia

// 7. Crea una clase que haga uso de getters y setters

// 8. Modifica la clase con getters y setters para que use propiedades privadas

// 9. Utiliza los get y set y muestra sus valores

// 10. Sobrescribe un método de una clase que utilice herencia
