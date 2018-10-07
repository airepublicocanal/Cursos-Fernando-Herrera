let persona = {
    saludar() {
        return "Hola";
    }
};

let amigo = {
    saludar() {
        //ES5
        //return Object.getPrototypeOf(this).saludar(this) + ", saludos!!!";

        //ES6
        return super.saludar() + ", saludos!!!";
    }
};

Object.setPrototypeOf(amigo, persona);

console.log(amigo.saludar());