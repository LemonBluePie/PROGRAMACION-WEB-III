/**Crear una función que reciba un arreglo de números y devuelva el número mayor y el menor, en un objeto. 
let obj = miFuncion([3,1,5,4,2]) 
console.log(obj) // { mayor: 5, menor: 1 } 
 */


function mayormenor(numeros) { 
    if(!Array.isArray(numeros)){
        throw new Error("El parámetro 'numeros' debe ser un arreglo (Array)");
    }

    const resultado = { mayor: numeros[0], menor: numeros[0] };
    
    for (const num of numeros) { 
        if (num < resultado.menor) { 
            resultado.menor = num;
        }
        if (num > resultado.mayor) {
            resultado.mayor = num;
        }
    }

    return resultado;
}

let obj = mayormenor([3, 1, 5, 4, 2, 7]);
console.log(obj);