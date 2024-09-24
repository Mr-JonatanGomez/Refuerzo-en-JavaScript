//MAP, para estructurar conjuntos de datos
//cada Elemento ya no es único
//formados por KEY & VALUE como json


//declaracion e iniciacion

let miMapa = new Map() // dec
console.log(miMapa)

miMapa = new Map([
    ["name", "Jonatan"],
    ["surname", "Gomez"]
])

console.log(miMapa)

/* 
    ["phone", 652951],
    ["mail", "jon@mail.com"]
     */

    //METODOS

//Set (para añadir nuevos elementos (key & val) al map, si key ya existe, modifica)

miMapa.set("age", 37)
miMapa.set("name", "Jose Jonatan")//cambio a Jose Jonatan

console.log(miMapa)

//get (para obtener el valor)

console.log(miMapa.get("name"))
console.log(miMapa.get("email"))//undefined, porque no existe...para ver si existe preguntamos con HAS

//has

console.log(miMapa.has("name"))
console.log(miMapa.has("email"))

//keys , values, entries - Muestra Keys, values, o todo, sin separar
console.log()
console.log("las KEYS son: ")
console.log(miMapa.keys())

console.log()
console.log("las VALUES son: ")
console.log(miMapa.values())

console.log()
console.log("las ENTRIES son: ")
console.log(miMapa.entries())

console.log()

// size tamaño mapa
console.log(miMapa.size)




//delete

console.log(miMapa.delete("email"))//false porque no existe
console.log(miMapa.delete("age"))

console.log(miMapa)//ya no esta edad

//clear

miMapa.clear()

console.log(miMapa+" El mapa fue borrado xD")