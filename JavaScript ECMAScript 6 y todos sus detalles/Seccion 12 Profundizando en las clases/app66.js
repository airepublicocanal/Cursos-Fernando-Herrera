class Rectangulo {
    constructor(base, altura) {
        this.base = base;
        this.altura = altura;
    }

    getArea() {
        return `Cuadrado: ${this.base * this.altura}`;
    }
}

let rectangulo = new Rectangulo(2, 3);
console.log(rectangulo.getArea());

class Cuadrado extends Rectangulo {
    constructor(lado) {
        super(lado, lado);
    }

    getArea() {
        return `Cuadrado: ${this.base * this.base}`;
    }

    getAreaRectangulo() {
        return super.getArea();
    }
}

let cuadrado = new Cuadrado(5);
console.log(cuadrado.getArea());
console.log(cuadrado.getAreaRectangulo());