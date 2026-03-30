/**Crear una función que invierta el orden de las palabras en una frase. 
let cad = miFuncion(“abcd”) 
console.log(obj) // dcba  */

function invertir(texto) { 
    if (typeof texto !== 'string') { 
        throw new Error('El parámetro debe ser un texto (string)');
    }

    let resultado = '';
    for (let i = texto.length - 1; i >= 0; i--) {
        resultado += texto[i];
    }
    return resultado;
}


let cad = invertir("abcd");
console.log(cad);