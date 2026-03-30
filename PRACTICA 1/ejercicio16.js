// ========== DATOS ==========
const usuarios = [
    { id: 1, nombre: 'Ana', email: 'ana@email.com', activo: true },
    { id: 2, nombre: 'Luis', email: 'luis@email.com', activo: false },
    { id: 3, nombre: 'Carlos', email: 'carlos@email.com', activo: true }
];

// ========== ORIGINAL ==========
console.log('VERSIÓN ORIGINAL CON PROMESAS:\n');

function buscarUsuarioPorIdPromesa(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const usuario = usuarios.find(u => u.id === id);
            if (usuario) {
                resolve(usuario);
            } else {
                reject('Usuario no encontrado');
            }
        }, 500);
    });
}

function verificarActivoPromesa(usuario) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (usuario.activo) {
                resolve(usuario);
            } else {
                reject('Usuario inactivo');
            }
        }, 500);
    });
}

function enviarEmailPromesa(usuario) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Email enviado a ${usuario.email}`);
        }, 500);
    });
}

function procesarUsuarioPromesa(id) {
    console.log(`Procesando usuario ${id}...`);
    
    return buscarUsuarioPorIdPromesa(id)
        .then(usuario => {
            console.log(` Usuario encontrado: ${usuario.nombre}`);
            return verificarActivoPromesa(usuario);
        })
        .then(usuario => {
            console.log(` Usuario activo: ${usuario.nombre}`);
            return enviarEmailPromesa(usuario);
        })
        .then(mensaje => {
            console.log(` ${mensaje}`);
            return { success: true, mensaje: 'Proceso completado' };
        })
        .catch(error => {
            console.log(` Error: ${error}`);
            return { success: false, mensaje: error };
        });
}

procesarUsuarioPromesa(1)
    .then(resultado => {
        console.log(' Resultado final (promesas):', resultado);
    });

// ========== VERSIÓN MIGRADA A ASYNC/AWAIT ==========
setTimeout(async () => {
    console.log('\n VERSIÓN MIGRADA A ASYNC/AWAIT:\n');
    
    function buscarUsuarioPorId(id) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const usuario = usuarios.find(u => u.id === id);
                if (usuario) {
                    resolve(usuario);
                } else {
                    reject('Usuario no encontrado');
                }
            }, 500);
        });
    }
    
    function verificarActivo(usuario) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (usuario.activo) {
                    resolve(usuario);
                } else {
                    reject('Usuario inactivo');
                }
            }, 500);
        });
    }
    
    function enviarEmail(usuario) {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(`Email enviado a ${usuario.email}`);
            }, 500);
        });
    }
    
    async function procesarUsuarioAsync(id) {
        try {
            console.log(`Procesando usuario ${id}...`);
            
            const usuario = await buscarUsuarioPorId(id);
            console.log(`Usuario encontrado: ${usuario.nombre}`);
            
            const usuarioActivo = await verificarActivo(usuario);
            console.log(`Usuario activo: ${usuarioActivo.nombre}`);
            
            const mensaje = await enviarEmail(usuarioActivo);
            console.log(`${mensaje}`);
            
            return { success: true, mensaje: 'Proceso completado' };
            
        } catch (error) {
            console.log(`Error: ${error}`);
            return { success: false, mensaje: error };
        }
    }
    
    // Ejecutar versión async/await
    const resultado = await procesarUsuarioAsync(1);
    console.log('Resultado final:', resultado);
    
    // Probar con usuario inactivo
    console.log('\n--- Probando con usuario inactivo (id:2) ---');
    const resultadoInactivo = await procesarUsuarioAsync(2);
    console.log('Resultado:', resultadoInactivo);
    
    // Probar con usuario inexistente
    console.log('\n--- Probando con usuario inexistente (id:99) ---');
    const resultadoInexistente = await procesarUsuarioAsync(99);
    console.log('Resultado:', resultadoInexistente);
}, 3000);