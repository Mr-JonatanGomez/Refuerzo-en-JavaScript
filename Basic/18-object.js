//OBJECTS

//Sintax, no funciona como en java donde hay que declarar cada atributo del object
let person = {
  name: "Jonatan",
  age: 37,
  alias: "Jony"
}

// accesibilidad a propiedades": varios tipos
//Como en java con la notación punto + clave
//Notacion de corchetes + clave entrecomillada

console.log(person.name) // mas directa y sencilla
console.log(person["alias"])

//modificacion del propiedades

person.name = "Jonatan Gomez"
console.log(person.name)

console.log(typeof person.age) // para ver tipo de dato de edad
person.age = "37" //se puede cambiar incluso el tipo de dato...como edad en numero a letra
console.log(typeof person.age) //tras cambio

// eliminar propiedades

delete person.age
console.log(person.age) //da undefined por que ya no existe

console.log(person) // imprime la persona

// Añadir propiedad igual que añadir
person.email = "jjonatan.gr@gmail.com"
person["age"] = 37

console.log(person)

// METODOS en los objetos

let person2 = {
  name: "Sandra",
  age: 34,
  alias: "San",
  walk: function () {
    console.log("La persona camina")
  }
}

person2.walk()

// anidacion de objects (anidar un objeto (trabajo) dentro de la persona)

let person3 = {
  name: "Liam Gomez",
  age: 4,
  alias: "Liam",
  walk: function () {
    console.log(`La persona ${this.name} camina`) // para interpolar a los atributos usamos el this
    //importante, el this solo conoce lo que tiene dentro del objeto, si le metemos company...no lo conoce
  },
  job: {
    name: "programador",
    company: "UE_Practicioner",
    salary: 0,
    work: function () {
      console.log(`La persona esta trabajando`)
    }
  }
}

console.log(person3.walk()) //imprime persona con interpolacion
console.log(person3.job) //imprime trabajo
console.log(person3.job.name) //imprime solo el nombre del trabajo
person3.job.work() //sacara la funcion de work

//igualdad de objects
console.log(person)

let person4 = {
  name: "Jonatan Gomez",
  alias: "Jony",
  email: "jjonatan.gr@gmail.com",
  age: 37
}

console.log(person4) //ambos son iguales??
console.log(person == person4) // da false
console.log(person === person4) // da false porque identidad tampoco lo reconoce
// la forma de guardarse en memoria es distinta, y se compara la direccion de memoria

//se podria comprobar los valores pero no como total

console.log(person.name == person4.name) //dara true

// Iterar objetos ( es con FOR IN, pero accedes a las claves)

for (let key in person4) {
  console.log(key + ": " + person4[key]) //con los corchetes se accede al valor de la clave
}

// funciones como objects, parecido a los constructores JAVA

function Person(name, age){// no es una buena practica
    this.name = name
    this.age= age
}

let person5 = new Person("Pepito",37)

console.log(person5)
console.log(typeof person5)
console.log(typeof person4)
