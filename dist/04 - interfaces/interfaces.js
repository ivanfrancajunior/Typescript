"use strict";
/*
são contratos que definem a estrutura de um objeto, incluindo os tipos dos seus membros (métodos, propriedades etc.).
*/
function saudar(pessoa) {
    return console.log("Olá, " + pessoa.nome);
}
function mudarNome(pessoa) {
    return (pessoa.nome = "Joana");
}
const joao = {
    nome: "João",
    idade: 5,
};
saudar(joao);
mudarNome(joao);
saudar({ nome: "Manoel", idade: 60, AB: true });
//Usando classes
class Client {
    constructor() {
        this.nome = "";
    }
    ultimaCompra() {
        return console.log(new Date());
    }
    saudar(sobrenome) {
        return console.log("Olá, meu nome é " + this.nome + " " + sobrenome);
    }
}
const meuCliente = new Client();
meuCliente.nome = "Han";
meuCliente.saudar("Solo");
meuCliente.ultimaCompra;
let potencia = function (base, exposente) {
    return base ** exposente;
};
console.log(potencia(2, 2));
class RealA {
    a() { }
}
class RealAB {
    a() { }
    b() { }
}
class RealABC {
    a() { }
    b() { }
    c() { }
}
class AbstrataABD {
    a() { }
    b() { }
}
