const getNombre = async() => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Fernando');
        }, 3000);
    });
};

const saludo = async() => {
    const nombre = await getNombre();

    return `Hola ${nombre}`;
}

saludo().then(mensaje => {
    console.log(mensaje);
})