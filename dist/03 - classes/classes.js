"use strict";
class Data {
    constructor(data = 1, mes = 1, ano = 1970) {
        this.data = data;
        this.mes = mes;
        this.ano = ano;
    }
}
const aniversario = new Data(16, 2, 1994);
const aniversario2 = new Data();
console.log(aniversario);
console.log(aniversario2);
class Produto {
    constructor(nome, preco, desconto = 0) {
        this.nome = nome;
        this.preco = preco;
        this.desconto = desconto;
        this.nome = nome;
        this.preco = preco;
        this.desconto = desconto;
    }
    resumo() {
        return ` ${this.nome} custa R$ ${this.preco} e está com ${this.desconto * 100}% off.`;
    }
    precoComDesconto() {
        let desconto = this.preco * (1 - this.desconto);
        return `O preço com desconto é R$ ${desconto.toFixed(2)}.`;
    }
}
const batata = new Produto("Batata", 1);
const cenoura = new Produto("Cenoura", 1);
const cingarro = new Produto("Derbby", 10, 0.1);
console.log(cingarro.resumo());
console.log(cingarro.precoComDesconto());
//modificadores de acesso ( PUBLIC | PRIVATE )
class Carro {
    constructor(marca, modelo, velocidadeMaxima = 200) {
        this.marca = marca;
        this.modelo = modelo;
        this.velocidadeMaxima = velocidadeMaxima;
        this.velocidadeAtual = 0;
    }
    alterarVelocidade(delta) {
        const novaVelocidade = this.velocidadeAtual + delta;
        const velocidadeValida = novaVelocidade >= 0 && novaVelocidade <= this.velocidadeMaxima;
        if (velocidadeValida) {
            this.velocidadeAtual = novaVelocidade;
        }
        else {
            this.velocidadeAtual = delta > 0 ? this.velocidadeMaxima : 0;
        }
        return this.velocidadeAtual;
    }
    acelerar() {
        return this.alterarVelocidade(5);
    }
    frear() {
        return this.alterarVelocidade(-5);
    }
}
const carro1 = new Carro("Ford", "Ka", 185);
Array(50)
    .fill(0)
    .forEach(() => carro1.acelerar());
console.log(carro1.acelerar());
Array(40)
    .fill(0)
    .forEach(() => carro1.frear());
console.log(carro1.frear());
/*
    ----------------
        Herança
    ----------------

    O objetivo da erança é o reuso de código embora o natural e mais usual á a COMPOSIÇÃO.


  A RESPEITO DOS MODIFICADORES DE ACESSO E MÉTODOS:
   
  PUBLIC - O método público está visível pra todo mundo e é transmitido por herança.
  
  PRIVATE - O método fica visível apenas dentro da classe.
    
  PROTECTED - É visível dentro da classe também é transmitido por herança.

*/
class Ferrari extends Carro {
    constructor(modelo, velocidadeMaxima) {
        super("Ferrari", modelo, velocidadeMaxima);
    }
    acelerar() {
        return this.alterarVelocidade(20);
    }
    frear() {
        return this.alterarVelocidade(-15);
    }
}
const f40 = new Ferrari("f40", 320);
f40.acelerar();
f40.acelerar();
//getters & Setters
class Pessoa {
    constructor() {
        this._idade = 0;
    }
    get idade() {
        return this._idade;
    }
    set idade(valor) {
        if (valor >= 0 && valor <= 120) {
            this._idade = valor;
        }
    }
}
const seuRegino = new Pessoa();
seuRegino.idade = 10;
console.log(seuRegino);
//static atributes/ methods - atribui caracteriticas e metodos à classe e não as  intâncias dela.(faz com q os métodos e as caracteristicas sejam da classe e não das cópias)
class Matematica {
    static areaCirc(raio) {
        return this.PI * raio * raio;
    }
}
Matematica.PI = 3.1416;
class outraMatematica extends Matematica {
}
outraMatematica.areaCirc(4);
console.log(Matematica.areaCirc(10));
/*

CLASSES ABSTRATAS

É a ideia ou conceito que gera as caracteristicas ações de uma classe.
Possuem um método abstrato que pode ou não ser implementado propiamente por elas mas quem herda dessa classe tem, q implementar necessariamente este método.

A classe NÃO pode ser instânciada!
*/
class Calculo {
    constructor() {
        this.resultado = 0;
    }
    getResultado() {
        return this.resultado;
    }
}
class Soma extends Calculo {
    executar(...numeros) {
        this.resultado = numeros.reduce((t, a) => t + a);
    }
}
class Multiplicacao extends Calculo {
    executar(...numeros) {
        this.resultado = numeros.reduce((t, a) => t * a);
    }
}
let c1 = new Soma();
c1.executar(2, 3, 4, 5);
console.log(c1.getResultado());
c1 = new Multiplicacao();
c1.executar(2, 3, 4, 5);
console.log(c1.getResultado());
//private constructor / singleton pattern
/*
  USO: Normalmente você usa quando você quer ter apenas uma instância da classe e ainda assim quer trabalhar com métodos e atributos.
  
  Funciona criando um propio atributo (instance) isntanciando a classe e um método acessivel apenas pela classe (static method)
  fornecendo  acesso aos demais métodos contidos na classe sem a instanciar diretamente.
  
  Implementado em conexões com bancos de dados.
  
*/
class Unico {
    constructor() { }
    static getIntance() {
        return Unico.instance;
    }
    agora() {
        return new Date();
    }
}
Unico.instance = new Unico();
console.log(Unico.getIntance().agora());
