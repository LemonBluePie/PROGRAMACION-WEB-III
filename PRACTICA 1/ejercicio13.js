const productos = [
    { id: 1, nombre: 'Laptop', precio: 1000, stock: 5 },
    { id: 2, nombre: 'Mouse', precio: 50, stock: 10 },
    { id: 3, nombre: 'Teclado', precio: 80, stock: 3 }
];
const carrito = [];
function agregarAlCarrito(productoId, cantidad) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const producto = productos.find(p => p.id === productoId);
            if (producto && producto.stock >= cantidad) {
                carrito.push({ ...producto, cantidad });
                resolve({ success: true, mensaje: `${producto.nombre} agregado al carrito` });
            } else {
                reject({ success: false, mensaje: 'Producto sin stock o no existe' });
            }
        }, 500);
    });
}
function calcularTotal() {
    return new Promise((resolve) => {
        setTimeout(() => {
            const total = carrito.reduce((sum, item) => sum + (item.precio * item.cantidad), 0);
            resolve(total);
        }, 500);
    });
}
function aplicarPromocion(total) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (total > 100) {
                const descuento = total * 0.1;
                resolve({ totalOriginal: total, descuento, totalFinal: total - descuento });
            } else {
                reject({ mensaje: 'No aplica promoción (monto mínimo $100)' });
            }
        }, 500);
    });
}
function procesarPago(total) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ success: true, mensaje: `Pago de $${total} procesado` });
        }, 500);
    });
}
agregarAlCarrito(1, 1)
    .then(resultado1 => {
        console.log(resultado1.mensaje);
        return agregarAlCarrito(2, 2)
            .then(resultado2 => {
                console.log(resultado2.mensaje);
                return agregarAlCarrito(3, 1)
                    .then(resultado3 => {
                        console.log(resultado3.mensaje);
                        return calcularTotal()
                            .then(total => {
                                console.log(`Total: $${total}`);
                                return aplicarPromocion(total)
                                    .then(promocion => {
                                        console.log(`Descuento: $${promocion.descuento}`);
                                        console.log(`Total final: $${promocion.totalFinal}`);
                                        return procesarPago(promocion.totalFinal)
                                            .then(pago => {
                                                console.log(pago.mensaje);
                                                console.log('Compra completada (promesas anidadas)\n');
                                            });
                                    });
                            });
                    });
            });
    })
    .catch(error => {
        console.log('Error:', error.mensaje);
    });


setTimeout(async () => {
    console.log('VERSIÓN CON ASYNC/AWAIT :\n');
    
    // Vaciar carrito para nueva prueba
    carrito.length = 0;
    
    try {
        const resultado1 = await agregarAlCarrito(1, 1);
        console.log(resultado1.mensaje);
        
        const resultado2 = await agregarAlCarrito(2, 2);
        console.log(resultado2.mensaje);
        
        const resultado3 = await agregarAlCarrito(3, 1);
        console.log(resultado3.mensaje);
        
        const total = await calcularTotal();
        console.log(`Total: $${total}`);
        
        const promocion = await aplicarPromocion(total);
        console.log(`Descuento: $${promocion.descuento}`);
        console.log(`Total final: $${promocion.totalFinal}`);
        
        const pago = await procesarPago(promocion.totalFinal);
        console.log(pago.mensaje);
        
        console.log('Compra completada (async/await)');
      
    } catch (error) {
        console.log('Error:', error.mensaje);
    }
}, 4000);