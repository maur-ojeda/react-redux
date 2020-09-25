function fn1(a,b){
    return a+b;
}
const res1= fn1(1,2)
console.log(res1)


/**
 * Toda FatArrow fn viene con un return implicito de la primera linea
 * @param {*} a 
 * @param {*} b 
 */
const fn2 = (a,b) => a + b
const res2 = fn2(3,4)
console.log(res2)

/**
 * otra forma de escribir para mas de una sola linea
 */
const fn3 = (a,b) => {
    //pero se debe definir que se va a retornar
    return a + b
}
const res3 = fn3(3,4)
console.log(res3)