/**Crear una función que cuente cuántas veces aparece cada vocal
en un texto y devuelva el resultado en un objeto. 
let obj = miFuncion(“euforia”) 
console.log(obj) // { a: 1, e: 1, i: 1, o: 1, u: 1 } */
function contadorVocal(texto) { 
    //VALIDAR
    if (typeof texto !== 'string') { 
        throw new Error ('El parámetro debe ser un texto (string)')
    }
    //INICIAR OBJ
    const vocales = {
        a: 0,
        e: 0,
        i: 0,
        o: 0,
        u: 0
    }
    for (const letra of texto.toLowerCase())
        if (letra in vocales) {
            vocales[letra]++;
        }

    return vocales;
}

let obj = contadorVocal("euforia");
console.log(obj);