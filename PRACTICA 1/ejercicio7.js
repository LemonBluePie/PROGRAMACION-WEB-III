function almacenarSoloResto(arr) {
    if (!Array.isArray(arr)) {
        throw new Error('El parámetro debe ser un arreglo (array)');
    }
    
    const [, , ...resto] = arr;
    
    return resto;
}



let resultado =
    almacenarSoloResto([1,
        2, 3, 4, 5
        , 6, 7, 8, 9, 10]);
console.log(resultado);