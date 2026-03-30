function promesa() {
    return new Promise((resolve, reject) => {
        console.log('Promesa iniciada... (3 segundos)');
        
        setTimeout(() => {
            resolve('Promesa resuelta con éxito después de 3 segundos');
        }, 3000);
    });
}

promesa()
    .then(mensaje => {
        console.log(mensaje);
    })
    .catch(error => {
        console.error(error);
    });
