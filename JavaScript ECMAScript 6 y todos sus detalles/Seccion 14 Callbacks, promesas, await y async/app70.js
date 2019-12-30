const getUsuarioById = (id, callback) => {
    const usuario = {
        nombre: 'Fernando',
        id
    };

    if (id === 20) {
        callback(`El usuario con el id ${ id }, no existe.`);
    } else {
        callback(null, usuario);
    }
};

getUsuarioById(1, (err, usuario) => {
    if (err) {
        return console.error(err);
    }

    console.log('Usuario de base de datos', usuario);
});