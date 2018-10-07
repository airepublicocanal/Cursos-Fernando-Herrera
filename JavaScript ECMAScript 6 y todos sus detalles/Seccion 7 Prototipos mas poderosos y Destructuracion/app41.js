//ES5
function crearJugador(nickname, opciones) {
    opciones = opciones || {};

    let hp = opciones.hp;
    let sp = opciones.sp;
    let clase = opciones.clase;

    console.log(nickname, hp, sp, clase);
}

crearJugador("Strider", { hp: 100, sp: 50, clase: "Mago" });

//ES6
function crearJugador2(nickname, { hp, sp, clase } = { hp: 110, sp: 20, clase: "Guerrero" }) {
    console.log(nickname, hp, sp, clase);
}

crearJugador2("Strider", { hp: 100, sp: 50, clase: "Mago" });
crearJugador2("Strider");