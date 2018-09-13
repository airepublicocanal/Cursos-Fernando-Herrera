interface XMen {
  nombre:string,
  poder:string
}

//Se podría mapear asi pero es mejor usar una interface
function enviarMision(xmen:{nombre:string}) {
  console.log("Enviando a: " + xmen.nombre);
}

function enviarCuartel(xmen:XMen) {
  console.log("Enviando al cuartel: " + xmen.nombre);
}

let tormenta:XMen = {
  nombre: "Tormenta",
  poder: "control del tiempo"
}

enviarMision(tormenta);
enviarCuartel(tormenta);
