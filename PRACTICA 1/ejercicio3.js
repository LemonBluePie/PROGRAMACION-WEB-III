/**Crear una función que reciba un arreglo de números y devuelva en un objeto a los pares 
e impares: 
let obj = miFuncion([1,2,3,4,5]) 
console.log(obj) // { pares: [2,4], impares: [1,3,5]}  */

function paresimpares(numeros) { 
    if (!Array.isArray(numeros)) { 
        throw new Error('El parámetro debe ser un arreglo (array)')
    }

    const pares = [];
    const impares = [];

    for (let i = 0; i < numeros.length; i++) { 
        if (numeros[i] % 2 == 0) { 
            pares.push(numeros[i]);
        } else {
            impares.push(numeros[i]);
        }
    }
    return {pares, impares}

}


let obj = paresimpares([1, 2, 3, 4, 5]);
console.log(obj);