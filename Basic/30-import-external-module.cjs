//MODULOS EXTERNOS
//con node hay un modulo para trabajar con el SO, que se llama OS

const os = require("os")

console.log(os.platform())
console.log(os.arch())
console.log(os.totalmem())
console.log(os.freemem())
