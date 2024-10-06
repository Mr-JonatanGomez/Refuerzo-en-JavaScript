let myArray = [1, 2, 3, 4]

let person = {
  name: "Jonatan",
  age: 37,
  alias: "JonyGomez"
}

let myValue = myArray[1]
console.log(myValue)

let myName = person.name
console.log(myName)

//DESESTRUCTURACIÓN (permite extarer valores de arrays/objects y asignar a variables)

//Sintax Array

let [myValue0, myValue1, myValue2, myValue3, myValue4] = myArray

console.log(myValue0) // asigna valor destructurando el array en variables
console.log(myValue1)
console.log(myValue2)
console.log(myValue3)
console.log(myValue4)

//4 sacara undefined, porque mi array no tiene posicion 4

//SINTX ARRAY con valor predeterminado
// [myValue4=0]=myArray da error
// no se puede redefinir ni dar predeterminacion a los myValue ya creados

let [myValue5, myValue6, myValue7, myValue8, myValue9 = 0] = myArray
console.log(myValue5) // asigna valor destructurando el array en variables
console.log(myValue6)
console.log(myValue7)
console.log(myValue8)
console.log(myValue9) // aqui muestra 0, porque se lo hemos dado

//IGNORAR ELEMENTOS DEL ARRAY
/*
let [myValue10, myValue11,myValue12 , myValue13] = myArray
console.log(myValue10)
console.log(myValue11)
console.log(myValue12)
console.log(myValue13)*/

// para ignirar 11 y 12

let [myValue10, , , myValue13] = myArray
console.log(myValue10)
console.log(myValue13)

//DESTRUCTURANDO OBJECTS
// en bojeto es con llaves, no corchetes como el array, ya que es su formato
let { age, name, alias } = person
console.log(name)
console.log(age)
console.log(alias)
// en los objetos destructura por la clave, no es como el array que va por orden
// por eso aunque destructuremos en desorden, lo hace bien

//Sintax valor predet
let { name2, age2, alias2, email2 = "email@email.com" } = person
console.log(name2)
console.log(age2) //no existe
console.log(alias2)
console.log(email2)

// va a mostrar las 3 primeras undefined,
//porque la clave de person no es age2, o name2...SÍ es email2, porque esta creada en ese momento

//SINTAX OBJECTS CON NUEVOS NOMBRES DE VARIABLES

let { age: age3, alias: alias3, name: name3 } = person
console.log(name3)
console.log(age3)
console.log(alias3)

//DESTRUCTURACION CON OBJETOS ANIDADOS

let person3 = {
  name: "Liam Gomez",
  age: 4,
  alias: "Liam",
  walk: function () {
    console.log(`La persona ${this.name} camina`)
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

let {
  name: name4,
  job: { name: jobName }
} = person3 // buscamos en job: y dentro {} la prop name igualamos a jobName ya que name 4 ya existe...
console.log(jobName)

// Spreading / Propagación  (Expandir elem de un array u objeto a otros)

//vamos a propagar myArray dentro del array2, con 3 puntos
let myArray2 = [...myArray] // como copiar
console.log(myArray2)

let myArray3 = [...myArray, 5, 6, 7]
console.log("Sacando la propagacion de miArray mas los numeros 5,6 y 7 ")
console.log(myArray3)

//COMBI de Arrays
let myArray4 = [...myArray2, ...myArray3]
console.log(myArray4)

// PROPAGAR OBJETOS
let person4= {...person, email:"tukituki@tukituki.com"}//copiamos el objeto y le propagamos el mail
console.log(person4)

//copia

let person5= {...person}
console.log(person5)



