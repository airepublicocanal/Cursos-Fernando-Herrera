function Persona() {
    this.nombre = "Fernando";
    this.apellido = "Herrera";
    this.edad = 30;
    this.pais = "Costa Rica";
}

// Si esta ui solo esta una vez en memoria. Si se pone dentro de persona estaría N veces
Persona.prototype.imprimirInfo = function() {
    console.log(this.nombre + " " + this.apellido + " (" + this.edad  + ")");
};

var fer = new Persona();

console.log(fer);
console.log(fer.pais);

Number.prototype.esPositivo = function() {
    if (this > 0) {
        return true;
    } else{
        return false;
    }
}

var numero = 1;