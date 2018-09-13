document.onmousedown = function(arg) {
    console.log(arg);
    if (arg.button === 2) {
        alert("Click Bloqueado");
        return;
    }

    console.log("No hay problema");
}

document.onmouseup = function() {
    var texto = window.getSelection().toString();
    console.log(texto);
}