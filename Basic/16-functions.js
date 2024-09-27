//Functions

// SIMPLE,
function myFunc() {
    console.log("Hola, primera función")
  }
  console.log("Vamos a imprimir la funcion dentro de un bucle")
  for (let index = 0; index < 5; index++) {
    myFunc()
  }
  
  // FUNCION CON PARAMETROS
  function functionWithParametros(name) {
    console.log(`Saludo, al nombre pasado por param, Hola ${name}`)
  }
  
  functionWithParametros("Jonh Parametro")
  
  //Funciones anonimas, no llevan nombre de funcion sirven para almacenar funciones a una variable
  
  const myFunc2 = function (name) {
    console.log(`Saludo, en funcion anonima, Hola ${name}`)
  }
  myFunc2("John Anonymous")
  
  // Arrow functions (no llevan ni nombre ni la palabra funcion, en su lugar =>)
  const myFunc3 = (name) => {
    console.log(`Saludo, en funcion arow, Hola ${name}`)
  }
  myFunc3("John Arrow")
  
  //tienen mas sentido para meterlas en una sola linea y no necesita llaves
  
  const myFunc4 = (name) => console.log(`Saludo, en funcion arow, Hola ${name}`)
  myFunc4("John OneLine")
  
  //Parametros
  
  function sum(a, b) {
    console.log(a + b)
  }
  
  sum(5, 12)
  sum(5) //da NaN, porque necesita sus 2 param se evita dando valor por defecto 0
  
  function sumDefault(a = 0, b = 0) {
    console.log(a + b)
  }
  sumDefault(5, 12)
  sumDefault(7) // sumara 7+0
  
  //retorno de valores
  
  function mult(a, b) {
    return a * b
  }
  mult(5, 10) // no imprime, pero el valor si existe
  //se puede imprimir metiendoloo en un console.log
  let resultado = mult(5, 10)
  console.log(resultado)
  
  //funciones anidadas
  
  function extern() {
    console.log("Funcion externa")
    function intern() {
      console.log("Funcion interna")
    }
    //para que llame a Intern hay que hacerlo dentro de extern
    intern()
  }
  extern()
  //intern() daria error, porque no es visible fuera de extern
  
  //FUNCIONES DE ORDEN SUPERIOR
  // reciben funciones como argumento
  
  function applyFunc(func, param) {
    func(param)
  }
  
  applyFunc(myFunc4, "Funcion de Orden superior")
  
  //FOREACH
  
  myArray = [3, 8, 15]
  
  let mySet = new Set()
  mySet = new Set(["Jonatan", "Gomez", "JongoDev", 37, "Jon@mail"]) //meterle los corchetes, si no no lo coge correctamente
  
  let myMapa = new Map()
  myMapa = new Map([
    ["name", "Jonatan"],
    ["surname", "Gomez"],
  ])
  
  myArray.forEach((value) => console.log(value))
  mySet.forEach((value) => console.log(value))
  myMapa.forEach((value) => console.log(value))
  