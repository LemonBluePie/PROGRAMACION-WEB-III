import express from 'express';
import pool from './db.js';

const app = express();
const PORT = 3001;

app.use(express.json());

app.post('/categorias', async (req, res) => {
    try {
        const { nombre, descripcion } = req.body;

        if (!nombre || nombre.trim() === '') {
            return res.status(400).json({
                error: "El nombre no puede estar vacío"
            });
        }
        const [resultado] = await pool.query(
            'INSERT INTO categorias (nombre, descripcion) VALUES (?, ?)',
            [nombre, descripcion]
        );
        res.status(201).json({
            mensaje: `Categoria "${nombre}" fue creada con exito uwu!`,
            id: resultado.insertId
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.get('/categorias', async (req, res) => {
    try {
        const [categorias] = await pool.query('SELECT * FROM categorias');

        res.status(200).json(categorias);
        
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.get('/categorias/:id', async (req, res) => {
    const id = req.params.id; //ID de la categoria que llamamos

    const [categoria] = await pool.query('SELECT * FROM categorias WHERE id = ?', [id]);
    
    if (categoria.length === 0) {
        return res.status(404).json({ error: 'Categoría no encontrada' });
    }
    
    // Buscar sus productos
    const [productos] = await pool.query('SELECT * FROM productos WHERE categoria_id = ?', [id]);
    
    res.status(200).json({
        categoria: categoria[0],
        productos: productos
    });
});

app.patch('/categorias/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const { nombre, descripcion } = req.body;

        if (nombre) {
            await pool.query(
                'UPDATE categorias SET nombre = ?, updatedAt = NOW() WHERE id = ?',
                [nombre, id]
            );
        }

        if (descripcion) {
            await pool.query(
                'UPDATE categorias SET descripcion = ?, updatedAt = NOW() WHERE id = ?',
                [descripcion, id]
            );
        }
        
        res.status(200).json({ 
            mensaje: `Categoría ${id} actualizada correctamente`
        });
        
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.delete('/categorias/:id', async (req, res) => {
    try {
        const id = req.params.id;

        const [existe] = await pool.query(
            'SELECT * FROM categorias WHERE id = ?', 
            [id]
        );
        
        if (existe.length === 0) {
            return res.status(404).json({ 
                error: `No existe una categoría con ID ${id}` 
            });
        }
        await pool.query('DELETE FROM categorias WHERE id = ?', [id]);
        
        res.status(200).json({ 
            mensaje: `Categoría "${existe[0].nombre}" y sus productos fueron eliminados`
        });
        
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});