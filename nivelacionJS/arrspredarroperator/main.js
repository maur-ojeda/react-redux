// array spread operator
/**
 * para esparcir los elementos de un arrego, para llamar argumentos en funciones
 *para cuando queramos usar un arreglo para pasar argumentos a una fn
 */
const arr = [1, 2]

const suma = (a, b) => a + b

const resultadoA = suma(arr[0], arr[1])
    //tomara el primer agumento y se o pasara al primer parametor 1 = a, 2 = b y asi 
const resultadoB = suma(...arr)

console.log(resultadoA)
console.log(resultadoB)



//Otro uso es generar copias
const arr2 = arr
const arr3 = [...arr]

//se mutaran arr y arr2
arr.push(3)

console.log(arr, arr2, arr3)