
/**6.	Tomar los dos primeros elementos de un arreglo y almacenarlos en dos variables mediante desestructuración. */
function tomarPrimerosDos(arr) {
    if (!Array.isArray(arr)) {
        throw new Error('El parámetro debe ser un arreglo (array)');
    }
    
    const [primero, segundo] = arr;
    
    return { primero, segundo };
}

const colores = ['rojo', 'verde', 'azul'];

const [color1, color2] = colores;
console.log('Variable color1:', color1);
console.log('Variable color2:', color2);