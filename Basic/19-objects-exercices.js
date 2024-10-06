// 1. Crea un objeto con 3 propiedades
let animal ={
    name: "tiger",
    type: "feline",
    habitat: "rain forest"
}
// 2. Accede y muestra su valor
console.log(animal)
// 3. Agrega una nueva propiedad
animal.life_expectancy=15
console.log(animal)

// 4. Elimina una de las 3 primeras propiedades
delete animal.type
console.log(animal)

// 5. Agrega una función e invócala
animal.run= function run(){
    console.log(`El ${animal.name} se dispone a correr`)
}
animal.run()
// 6. Itera las propiedades del objeto
for (const key in animal) {
    /*
    ESTE IF RELLENADO AUTO, es para ver si tiene herencias y demas
    if (Object.prototype.hasOwnProperty.call(animal, key)) {
        const element = animal[key];
        
    }*/
   console.log(key + " :" +animal[key])
}
// 7. Crea un objeto anidado
animal.cazar= cazar={
    type: "crouching between shadows",
    action1: "running quickly",
    action2: "jumping over the dam"
}

console.log(animal)
// 8. Accede y muestra el valor de las propiedades anidadas
console.log(animal.cazar)
// 9. Comprueba si los dos objetos creados son iguales
console.log(animal == animal.cazar)
// 10. Comprueba si dos propiedades diferentes son iguales
console.log("comprobando si nombre y habitat es =: "+animal.name == animal.habitat)
console.log("comprobando si nombre y habitat es mismo tipo de dato: "+ animal.name === animal.habitat)

// ambas son false, ya que la direccion de memoria es diferente