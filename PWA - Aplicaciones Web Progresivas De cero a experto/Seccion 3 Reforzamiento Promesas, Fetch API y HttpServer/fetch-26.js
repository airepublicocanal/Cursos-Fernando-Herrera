fetch('https://reqres.in/api/users/1000')
    .then(resp => {
        console.log(resp);

        if (resp.ok) {
            return resp.json()
        } else {
            throw new Error('No existe el usuario');
        }
    })
    .then(console.log)
    .catch(error => {
        console.log('Error en la peticion');
        console.log(error);
    });