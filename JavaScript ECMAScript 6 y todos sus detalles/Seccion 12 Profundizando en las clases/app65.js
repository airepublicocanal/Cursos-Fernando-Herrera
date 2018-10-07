class Rectangulo {
    constructor(base, altura) {
        this.base = base;
        this.altura = altura;
    }

    getArea() {
        return this.base * this.altura;
    }
}


let rectangulo = new Rectangulo(2, 3);
console.log(rectangulo.getArea());

class Cuadrado extends Rectangulo {
    constructor(lado) {
        super(lado, lado);
    }
}

let cuadrado = new Cuadrado(5);
console.log(cuadrado.getArea());

console.log(cuadrado instanceof Cuadrado);
console.log(cuadrado instanceof Rectangulo);

console.log(rectangulo instanceof Cuadrado);
console.log(rectangulo instanceof Rectangulo);