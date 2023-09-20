"use strict";
const nome = "Jota"; //tipo string
const num = 5; //tipo number
const confia = true; //tipo boolean
const arr = ["array de strings"]; //tipo array (do tipo string)
const colors = ["tupla", "tupla", "tupla"]; //tipo tupla
//enum | enumerator
var Week;
(function (Week) {
    Week[Week["domingo"] = 0] = "domingo";
    Week[Week["seunda"] = 1] = "seunda";
    Week[Week["ter\u00E7a"] = 2] = "ter\u00E7a";
    Week[Week["quarta"] = 3] = "quarta";
    Week[Week["quinta"] = 4] = "quinta";
    Week[Week["sexta"] = 5] = "sexta";
    Week[Week["sabado"] = 6] = "sabado";
})(Week || (Week = {}));
// console.log(Week.domingo.toString());
const qlqrCoisa = "posso ser qlqr valor";
//funções como tipos
function calc(a, b) {
    return a * b;
}
const sum = calc;
let value = sum(2, 3);
// console.log(value);
//Objetos
const pessoa = {
    name: "Jota",
    age: 29,
};
const funcionario = {
    nome: "Jota",
    idade: 29,
    supervisores: ["João", "Maria"],
    baterPonto(time) {
        let atraso = "";
        const data = new Date();
        const dia = data.getDate();
        const mes = data.getMonth() + 1;
        if (time > 8) {
            return (atraso = "ATRASADO");
        }
        else {
            atraso = "PONTO NORMAL";
        }
        return `[${atraso}] - O funcionário saiu às ${time} no dia ${dia}/${mes}.`;
    },
};
console.log(funcionario.baterPonto(7));
//Union types
let notas = 5;
notas = "7";
//never
function falha(msg) {
    throw new Error(msg);
}
const produto = {
    nome: "produto modelo",
    preco: -1,
    validaProduto() {
        if (!this.nome || this.nome.trim.length == 0) {
            falha("O produto precisa ter um nome ");
        }
        if (!this.preco || this.preco < 0) {
            falha("Insira um valor maior que 0");
        }
    },
};
