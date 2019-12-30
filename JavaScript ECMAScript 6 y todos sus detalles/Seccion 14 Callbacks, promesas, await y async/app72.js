const empleados = [{
    id: 1,
    nombre: 'Fernando'
}, {
    id: 2,
    nombre: 'Melissa'
}, {
    id: 3,
    nombre: 'Juan'
}];

const salarios = [{
    id: 1,
    salario: 1000
}, {
    id: 2,
    salario: 2000
}];

const getEmpleado = (id) => {
    return new Promise((resolve, reject) => {
        const empleadoDB = empleados.find(empleado => empleado.id == id);

        if (!empleadoDB) {
            reject(`No existe empleado con el id ${id}`);
        } else {
            resolve(empleadoDB);
        }
    });
};

//id de la persona
//err:No se encontro un salario para el empleado "Nombre del empleado"
// Si existe:  { nombre, salario, id }
const getSalario = (empleado) => {
    return new Promise((resolve, reject) => {
        const salarioDB = salarios.find(salario => salario.id == empleado.id);

        if (!salarioDB) {
            reject(`No se encontro un salario para el empleado ${empleado.nombre}`);
        } else {
            resolve({
                nombre: empleado.nombre,
                salario: salarioDB.salario,
                id: empleado.id
            });
        }
    });
};

//USO
getEmpleado(1)
    .then(empleado => {
        console.log('El empleado es', empleado);

        return getSalario(empleado);
    })
    .then(resp => console.log(`El salario de ${resp.nombre} es de ${resp.salario}`))
    .catch(console.log);