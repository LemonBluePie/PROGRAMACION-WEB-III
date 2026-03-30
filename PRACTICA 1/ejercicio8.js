function ejecutarCallback(callback) {
    console.log('Esperando 2 segundos...');
    
    setTimeout(() => {
        callback('Callback ejecutado después de 2 segundos');
    }, 2000);
}
ejecutarCallback((mensaje) => {
    console.log(mensaje);
});
console.log('(Antes del callback)');