//CLASES (similar a java, sin dar valor al objeto, solo propiedades)

/*
los objetos simples se declaraban como variable
let person = {
name: "Jonatan",
age: 37,
alias: "Jony"
}
*/
class Person {
  constructor(name, age, alias) {
    this.name = name
    this.age = age
    this.alias = alias
  }
}

//como instanciar personas  igual que en JAVA

let person = new Person("Jhon Katzenbach", 57, "Jhon")
let person2 = new Person("Ken Follet", 67, "KF")

console.log(person2)

//valores por defecto...como en java los valores Param van por orden

class DefaultPerson {
  constructor(name = "Default Name", age = 0, alias = "Default AKA") {
    this.name = name
    this.age = age
    this.alias = alias
  }
}
let defaultPerson = new DefaultPerson()
console.log(defaultPerson)

// Acceso a propiedades

console.log(defaultPerson.name)

//editar o dar valores

defaultPerson.name = "Manduca"
console.log(defaultPerson.name)

//funciones en clases

class Coche {
  constructor(marca, modelo, año, CV) {
    this.marca = marca
    this.modelo = modelo
    this.año = año
    this.CV = CV
  }
  acelerar() {
    //no necesita la palabra function
    console.log("El coche está acelerando")
    let aceleracion = Math.random() * this.CV + 1
    console.log(
      `El coche ${this.marca} ${this.modelo} ha acelerado ha ${aceleracion} km/h `
    )
  }
}

let coche = new Coche("Opel", "Corsa", 2006, 80)
coche.acelerar()

// PRIVATE PROPERTIES como en java, que esto se especifica ESPLICITAMENTE, EN JS...
// ...se especifican las privadas con # delante y hay que declaralas antes de const.

class PrivatePerson {
  #bank

  constructor(name, age, alias, bank) {
    this.name = name
    this.age = age
    this.alias = alias
    this.#bank = bank
  }

  pay() {
    this.#bank
  }
}

let personPrivate1 = new PrivatePerson("Jon", 25, "JG", "ES333554BIC")

console.log(personPrivate1.bank) // da undefined, solo la clase tiene visibilidad en ello, ni imprimir ni mod

// GETTER & SETTER para dar acceso o modific privadas (COMO EN JAVA)

class GetSetPerson {
  #name
  #age
  #alias
  #bank
  constructor(name, age, alias, bank) {
    this.#name = name
    this.#age = age
    this.#alias = alias
    this.#bank = bank
  }
  get name() {
    return this.#name
  }
  set bank(newBank) {
    this.#bank = newBank
  }
  get bank() {
    //dado para ver que el cambio del set se ha realizado
    return this.#bank
  }
}
getPerson1 = new GetSetPerson(
  "Persona Getter",
  22,
  "Tio Getter",
  "IBAN123456789"
)

console.log(getPerson1) // no imprime nada
console.log(getPerson1.name) // al tener el get el name, ya es accesible si lo llamas explicitamnete

getPerson1.bank = "IBAN987654321"
console.log(getPerson1.bank)

//HERENCIA DE CLASES

class Animal {
  constructor(name) {
    this.name = name
  }

  sound() {
    console.log("Emite sonido generico")
  }
}

class Dog extends Animal {
  run() {
    console.log("The dog is running")
  }
}
class Fish extends Animal {
  constructor(name, size) {
    //como en java hay que llamar a super para reescribir la clase padre dentro del constructor
    super(name)
    this.size = size
  }

  swim() {
    console.log("The fish is swimming")
  }
}

let myDog = new Dog("GomezDog") // al crear te pide un nombre...que es de Animal
let myFish = new Fish("GomezFish", 5)

myDog.sound()
myDog.run()

//myFish.run() this function is exclusive of DOGS
myFish.swim()
myFish.sound()

//RESCRIBIR LAS FUNCIONES DE LA CLASE PADRE

class Cat extends Animal {
  constructor(name, hability) {
    super(name)
    this.hability = hability
  }
  sound() {
    console.log("Miauuuuuuuu") //al reescribir el sound, hace el suyo propio, en lugar de el de la clase padre
  }
}

let myCat = new Cat("GomezCat", "trepar muros")
myCat.sound()

//METODOS ESTATICOS, evitaria tener que instanciar la clase, para poder ser llamada la funcion

class MathOperations {
  static sum(a, b) {
    return a + b
  }
}

console.log(MathOperations.sum(4, 9))
