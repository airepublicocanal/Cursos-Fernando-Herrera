crearCookie("nombre", "fernando");
crearCookie("apellido", "herrera");
crearCookie("correo", "fernando.herrera85@gmail.com");
crearCookie("direccion", "Sán José");

borrarCookie("nombre");

console.log(getCookie("correo"));
console.log(getCookie("nombre"));

function crearCookie(nombre, valor) {
    var hoy = new Date();
    valor = escape(valor);

    hoy.setMonth(hoy.getMonth() + 1);

    console.log(valor);
    console.log(unescape(valor));
    
    document.cookie = nombre + "=" + valor + ";expires=" + hoy.toUTCString() + ";";
}

function borrarCookie(nombre) {
    var hoy = new Date();

    hoy.setMonth(hoy.getMonth() - 1);
    
    document.cookie = nombre + "=borrar;expires=" + hoy.toUTCString() + ";";
}

function getCookie(nombre) {
    var cookies = document.cookie;
    var cookieArr = cookies.split("; ");

    console.log(cookieArr);

    for (let i = 0; i < cookieArr.length; i++) {
        var parArr = cookieArr[i].split("=");
        console.log(parArr);
        
        if (parArr[0] === nombre) {
            return unescape(parArr[1]);
        }
    }

    return undefined;
}