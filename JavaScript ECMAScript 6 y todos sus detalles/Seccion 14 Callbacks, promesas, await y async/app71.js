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

const getEmpleado = (id, callback) => {
    const empleadoDB = empleados.find(empleado => empleado.id == id);

    if (!empleadoDB) {
        callback(`No existe empleado con el id ${id}`);
    } else {
        callback(null, empleadoDB);
    }
};

//id de la persona
//err:No se encontro un salario para el empleado "Nombre del empleado"
// Si existe:  { nombre, salario, id }
const getSalario = (empleado, callback) => {
    const salarioDB = salarios.find(salario => salario.id == empleado.id);

    if (!salarioDB) {
        callback(`No se encontro un salario para el empleado ${empleado.nombre}`);
    } else {
        callback(null, {
            nombre: empleado.nombre,
            salario: salarioDB.salario,
            id: empleado.id
        });
    }
};

//USO
getEmpleado(2, (err, empleado) => {
    if (err) {
        return console.log(err);
    }

    getSalario(empleado, (err, resp) => {
        if (err) {
            return console.log(err);
        }

        console.log(`El salario de ${resp.nombre} es de ${resp.salario}`);
    });

    //console.log('empleado', empleado);
});