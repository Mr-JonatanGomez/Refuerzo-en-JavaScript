/*
Clase 3 en vídeo | 24/07/2024
Condicionales, arrays y sets
https://www.youtube.com/live/XCNjoIoO3Ws?si=3XCjdZ9r41JID-by&t=978
*/

// if, else if, else ( sintax igual que en java)

// if (si)

let age = 37

if (age == 37) {
    console.log("La edad es 37")
}

// else (si no)

if (age == 35) {
    console.log("La edad es 37")
} else {
    console.log("La edad no es 37")
}

// else if (si no, si), en cuanto coge una de las condiciones se salta las demas

if (age == 37) {
    console.log("La edad es 37")
} else if (age < 18) {
    console.log("Es menor de edad")
} else {
    console.log("La edad no es 37 ni es menor de edad")
}


// Operador Ternario
// vamos a asignar un mensaje a una variable const mediante el ternario

//age == 37 ? "La edad es 37" : "La edad no es 37"

const message = age == 37 ? "mensaje de Const, La edad es 37" : "Mensaje de Const, La edad no es 37"
console.log(message)

//Switch

let day = 0
let dayName

switch(day){
    case 0:
        dayName="Lunes"
    break

    case 1:
        dayName="Martes"
    break

    case 2:
        dayName="Miercoles"
    break
    
    case 3:
        dayName="Jueves"
    break
    
    case 4:
        dayName="Viernes"
    break
    
    case 5:
        dayName="Sabado"
    break
    
    case 6:
        dayName="Domingo"
    break

    default:
    "Numero de día incorrecto no comprende ninguna opcion real."

    }

console.log(dayName)