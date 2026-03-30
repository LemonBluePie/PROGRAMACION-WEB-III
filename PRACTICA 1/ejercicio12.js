function getUserCallback(id, callback) {
    setTimeout(() => {
        callback({ id: id, name: 'Juan' });
    }, 500);
}

function getPostsCallback(userId, callback) {
    setTimeout(() => {
        callback(['Post 1', 'Post 2']);
    }, 500);
}

function getCommentsCallback(post, callback) {
    setTimeout(() => {
        callback(['Comentario 1', 'Comentario 2']);
    }, 500);
}

//LLAMADO EN CALLBACK
getUserCallback(1, (user) => {
    console.log('Usuario:', user);
    getPostsCallback(user.id, (posts) => {
        console.log('Posts:', posts);
        getCommentsCallback(posts[0], (comments) => {
            console.log('Comentarios:', comments);
            console.log('Datos completados--\n');
        });
    });
});

setTimeout(() => {
    console.log('VERSIÓN CON ASYNC/AWAIT:\n');
    
    function getUser(id) {
        return new Promise(resolve => {
            setTimeout(() => resolve({ id: id, name: 'Juan' }), 500);
        });
    }
    
    function getPosts(userId) {
        return new Promise(resolve => {
            setTimeout(() => resolve(['Post 1', 'Post 2']), 500);
        });
    }
    
    function getComments(post) {
        return new Promise(resolve => {
            setTimeout(() => resolve(['Comentario 1', 'Comentario 2']), 500);
        });
    }

    async function obtenerDatosCompletos() {
        try {
            const user = await getUser(1);
            console.log('Usuario:', user);
            
            const posts = await getPosts(user.id);
            console.log('Posts:', posts);
            
            const comments = await getComments(posts[0]);
            console.log('Comentarios:', comments);
            
            console.log('Datos completados (async/await)');
        } catch (error) {
            console.error('Error:', error);
        }
    }
    obtenerDatosCompletos();
}, 4000);
