function leerArchivoCallback(nombreArchivo, callback) {
    console.log(`Leyendo archivo: ${nombreArchivo}...`);   
    setTimeout(() => {
        const exito = true;
        if (exito) {
            const contenido = `Contenido del archivo ${nombreArchivo}`;
            callback(null, contenido);
        } else {
            callback('Error al leer el archivo', null);
        }
    }, 1000);
}

function leerArchivoPromesa(nombreArchivo) {
    return new Promise((resolve, reject) => {
        leerArchivoCallback(nombreArchivo, (error, contenido) => {
            if (error) {
                reject(error);
            } else {
                resolve(contenido);
            }
        });
    });
}
// ========== DEMOSTRACIÓN ==========
leerArchivoPromesa('documento.txt')
    .then(contenido => {
        console.log('Contenido:', contenido);
    })
    .catch(error => {
        console.log('Error:', error);
    });