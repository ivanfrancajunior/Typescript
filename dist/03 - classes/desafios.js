"use strict";
// DESAFIO 1 - ATRIBUIR A SEGUINTE FUNÇÃO EM JAVASCRIPT A FORMA DE CLASSE E A TIPANDO.
/**
function Moto(nome) {
    this.nome = nome
    this.velocidade = 0
 
    this.buzinar = function() {
        console.log('Toooooooooot!')
    }
 
    this.acelerar= function(delta) {
        this.velocidade = this.velocidade + delta
    }
}
*/
class Moto {
    constructor(nome) {
        this.velocidade = 0;
        this.nome = nome;
    }
    buzinar() {
        return console.log("Toooooooooot!");
    }
    acelerar(delta) {
        this.velocidade = this.velocidade + delta;
    }
}
const moto = new Moto("Ducati");
moto.buzinar();
console.log(moto.velocidade);
moto.acelerar(30);
console.log(moto.velocidade);
// DESAFIO 2 - REFATORAR O CÓDIGO A SEGUIR ADERINDO AO CONCEITO DE HERANÇA
/*
crie uma classe > intancie ela e refatore para ts

var objeto2D = {
    base: 0,
    altura: 0
}
 
var retangulo = Object.create(objeto2D)
retangulo.base = 5
retangulo.altura = 7
retangulo.area = function() {
    return this.base * this.altura
}
console.log(retangulo.area())

*/
class Objeto2D {
    constructor(base, altura) {
        this.base = base;
        this.altura = altura;
    }
}
class Retangulo extends Objeto2D {
    constructor(base, altura) {
        super(base, altura);
    }
    area() {
        return console.log(this.base * this.altura);
    }
}
const ret1 = new Retangulo(2, 3);
ret1.area();
//DESAFIO 3 - REFATORAR USANDO GET & SET TIPANDO TUDO OBVIAMENTE:
/*
// Exercício 3 - Getters & Setters
var estagiario = {
    _primeiroNome: ''
}
 
Object.defineProperty(estagiario, 'primeiroNome', {
    get: function () {
        return this._primeiroNome
    },
    set: function (valor) {
        if (valor.length >= 3) {
            this._primeiroNome = valor
        } else {
            this._primeiroNome = ''
        }
    },
    enumerable: true,
    configurable: true
})
*/
class Estagiario {
    constructor() {
        this._primeiroNome = "";
    }
    set primeiroNome(nome) {
        if (!nome || nome.length < 3) {
            return;
        }
        this._primeiroNome = nome;
    }
    get primeiroNome() {
        return this._primeiroNome;
    }
}
const enzo = new Estagiario();
console.log(enzo);
console.log((enzo.primeiroNome = "Enzo"));
console.log(enzo.primeiroNome);
