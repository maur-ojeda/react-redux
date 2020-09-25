/**
 * VAR: existe la variable pero sin valor, el compilador de js lleva todo hacia ariba
 */
console.log(var0)
var var0 = 0

/**
 * let: no existe lavariable antes de ser declarada, gerera error
 */
// console.log(var1)
// let var1 = 'let'
/**
 * permite resignacion de valor
 */
let var2 = 0
var2 = "dos"
console.log(var2)
/**
 * const: no permite reasignacion de valores, genera error
 */
const var3 = 0
var3 = "dos"
console.log(var3)

