// object spread operator
/**
 * copia objetos en otros sin mutar los origines
*/
const obj = {
    a: 1,
    b: 2
}

const obj1 = {
    ...obj
}
obj1['c'] = 3

const obj2 = {
    data: {
        ...obj
    }
}

obj2['c'] = 3


console.log(obj, obj1);
console.log(obj2);