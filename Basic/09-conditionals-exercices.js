/*
Clase 3 en vídeo | 24/07/2024
Condicionales, arrays y sets
https://www.youtube.com/live/XCNjoIoO3Ws?si=3XCjdZ9r41JID-by&t=978
*/

// if/else/else if/ternaria

// 1. Imprime por consola tu nombre si una variable toma su valor
let miNombre = "Jon";

if (miNombre != undefined) {
  console.log(miNombre);
} else {
  console.log("Tu nombre está vacio");
}
// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos
let user = "cholo";
let pass = 1234;

if (user == "cholo" && pass == 1234) {
  console.log("user y pass correctos");
} else if (user == "cholo" && pass != 1234) {
  console.log("user correcto y pass incorrecta");
} else if (user != "cholo" && pass == 1234) {
  console.log("user incorrecto y pass correcta");
} else {
  console.log("user y pass incorrectos");
}
// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje
let numero = -3;

if (numero > 0) {
  console.log("el numero es positivo");
} else if (numero == 0) {
  console.log("el numero es cero");
} else {
  console.log("el numero es negativo");
}
// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan
let edadVot = 19;

if (edadVot >= 18) {
  console.log("Es mayor de edad, puede votar");
} else {
  console.log("Es menor de edad, no puede votar");
}
// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable
//    dependiendo de la edad

let edad = 17;
let condicion;
condicion = edad >= 18 ? "es adulto" : "es menor de edad";
console.log(condicion);

// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"
// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior

// switch
let mes = 6;
let estacion;
let nDias
switch (mes) {
  case 1:
    estacion = "invierno";
    nDias=31
    break;

  case 2:
    estacion = "invierno";
    nDias=28
    break;

  case 3:
    estacion = "invierno";
    nDias=31
    break;

  case 4:
    estacion = "primavera";
    nDias=30
    break;
  case 5:
    estacion = "primavera";
    nDias=31
    break;
  case 6:
    estacion = "primavera";
    nDias=30
    break;

  case 7:
    estacion = "verano";
    nDias=31
    break;

  case 8:
    estacion = "verano";
    nDias=31
    break;

  case 9:
    estacion = "verano";
    nDias=30
    break;

  case 10:
    estacion = "otoño";
    nDias=31
    break;
  case 11:
    estacion = "otoño";
    nDias=30
    break;
  case 12:
    estacion = "otoño";
    nDias=31
    break;

  default:
    "Los meses deben estar comprendidos entre 1 y 12";
}
console.log(estacion)
console.log(mes)
console.log("El mes tiene "+ nDias+" dias")



// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma

// 9. Usa un switch para hacer de nuevo el ejercicio 6

// 10. Usa un switch para hacer de nuevo el ejercicio 7

//ya los hice asi estos 2, y el del idioma es lo mismo