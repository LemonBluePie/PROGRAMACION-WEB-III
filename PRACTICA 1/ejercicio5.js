/**5.	Crear una función que determine si una cadena es palíndromo (se lee igual al derecho y al revés). */

function esPalindromo(texto) {
    if (typeof texto !== 'string') {
        throw new Error('El parámetro debe ser un texto (string)');
    }

    for (let i = 0; i < texto.length / 2; i++) {
        if (texto[i] !== texto[texto.length - 1 - i]) {
            return false;
        }
    }
    return true;
}

let band = esPalindromo("oruro");
console.log(band);

band = esPalindromo("hola");
console.log(band);
