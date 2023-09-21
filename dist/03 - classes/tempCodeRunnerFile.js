"use strict";
class Objeto2D {
    constructor() {
        this.base = 0;
        this.altura = 0;
    }
}
class Retangulo extends Objeto2D {
    constructor(base, altura) {
        super();
    }
    area() {
        return console.log(this.base * this.altura);
    }
}
const ret1 = new Retangulo(2, 3);
ret1.area;
