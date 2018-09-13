function identifica(param) {
    console.log(typeof param);
    console.log("Es persona: " + (param instanceof Persona));


    if (typeof param == "function") {
        param();
    } else {
        console.log(param);
    }
}

identifica(1);
identifica(1.1);
identifica("Hola");
identifica(true);
identifica(new Date());
identifica({});

function Persona() {
    this.nombre = "Fernando";
    this.edad = 30;
}

identifica(new Persona());
identifica(function() {
    console.log("Soy anonima");
});