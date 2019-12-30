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

const getEmpleado = async(id) => {
    const empleadoDB = empleados.find(empleado => empleado.id == id);

    if (!empleadoDB) {
        throw new Error(`No existe empleado con el id ${id}`);
    } else {
        return empleadoDB;
    }
};

//id de la persona
//err:No se encontro un salario para el empleado "Nombre del empleado"
// Si existe:  { nombre, salario, id }
const getSalario = async(empleado) => {
    const salarioDB = salarios.find(salario => salario.id == empleado.id);

    if (!salarioDB) {
        throw new(`No se encontro un salario para el empleado ${empleado.nombre}`);
    } else {
        return {
            nombre: empleado.nombre,
            salario: salarioDB.salario,
            id: empleado.id
        };
    }
};

const getInformacion = async(id) => {
    const empleado = await getEmpleado(id);
    const resp = await getSalario(empleado);

    return `El salario de ${resp.nombre} es de ${resp.salario}`;
};

getInformacion(1)
    .then(console.log)
    .catch(console.log);