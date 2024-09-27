/*
Clase 2 en vídeo | 17/07/2024
Tipos de datos, operadores y strings
https://www.youtube.com/live/euVbF1eatEY?si=nHS3QznAlA_C39NK&t=808
*/
let myName = "Jonatan"
// 1. Concatena dos cadenas de texto+
let cadena1 ="Hola amigos"
let cadena2 ="¿como estais? Nosotros muy bien."
console.log(cadena1+", "+cadena2)
// 2. Muestra la longitud de una cadena de texto
console.log(cadena2.length)
// 3. Muestra el primer y último carácter de un string
console.log(myName[0])
console.log(myName[myName.length-1])
// 4. Convierte a mayúsculas y minúsculas un string
console.log(myName.toUpperCase())
console.log(myName.toLowerCase())
// 5. Crea una cadena de texto en varias líneas
let frase= `Aqui tenemos
la frase de
varias lineas`
console.log(frase)
// 6. Interpola el valor de una variable en un string
const interpolar = `Hola amigos, mi nombre interpolado es ${myName}`
console.log(interpolar)
// 7. Reemplaza todos los espacios en blanco de un string por guiones
console.log(cadena2.replace(" ","-")+" Esto solo ha remplazado el primer espacio") 
console.log(cadena2.replace(/ /g,"-")+" Esto reemplaza todos con */ /g* que es una exp.regular de todos los espacios") 
// 8. Comprueba si una cadena de texto contiene una palabra concreta
console.log(cadena2.includes("como"))
// 9. Comprueba si dos strings son iguales
console.log(myName==frase)//false
console.log(myName=="jonatan")//false por la J
console.log(myName=="Jonatan")//true
console.log(myName.toLowerCase()=="jonatan")//true por conversion
// 10. Comprueba si dos strings tienen la misma longitud
console.log(cadena1.length == cadena2.length)