function leerArchivo() {
    return Promise.resolve('1,2,3,4,5,6,7,8,9,10');
}
    
function procesarDatos(datos) {
    return Promise.resolve(datos.split(',').map(Number));
}
    
function filtrarPares(numeros) {
    return Promise.resolve(numeros.filter(n => n % 2 === 0));
}
    
function sumar(numeros) {
    const suma = numeros.reduce((a, b) => a + b, 0);
    return Promise.resolve(suma);
}
    
leerArchivo()
    .then(datos => {
        console.log('Datos leídos:', datos);
        return procesarDatos(datos);
    })
    .then(numeros => {
        console.log('Números convertidos:', numeros);
        return filtrarPares(numeros);
    })
    .then(pares => {
        console.log('Números pares:', pares);
        return sumar(pares);
    })
    .then(suma => {
        console.log('Suma de pares:', suma);
        console.log('Completado');
    });

