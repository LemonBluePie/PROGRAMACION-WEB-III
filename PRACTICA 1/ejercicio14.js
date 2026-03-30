// ========== FUNCIÓN ORIGINAL ==========
function obtenerDatosPromesa() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const exito = true;
            if (exito) {
                resolve({ nombre: 'Juan', edad: 25, ciudad: 'La Paz' });
            } else {
                reject('Error al obtener los datos');
            }
        }, 1000);
    });
}

// ========== CONVERTIR A FUNCIÓN CON CALLBACK ==========
function obtenerDatosCallback(callback) {
    // Llamamos a la función original
    obtenerDatosPromesa()
        .then(datos => {
            callback(null, datos);
        })
        .catch(error => {
            callback(error, null);
        });
}

// ========== DEMOSTRACIÓN ==========
obtenerDatosCallback((error, datos) => {
    if (error) {
        console.log('Error:', error);
    } else {
        console.log('Datos recibidos:', datos);
    }
});