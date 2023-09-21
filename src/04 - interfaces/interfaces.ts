/*
são contratos que definem a estrutura de um objeto, incluindo os tipos dos seus membros (métodos, propriedades etc.).
*/

interface Humano {
  nome: string; // prop obrigatória
  idade?: number; //prop opcional
  [prop: string]: any; //prop dinâmica
  saudar?(sobrenome: string): void;
}
function saudar(pessoa: Humano) {
  return console.log("Olá, " + pessoa.nome);
}
function mudarNome(pessoa: Humano) {
  return (pessoa.nome = "Joana");
}

const joao: Humano = {
  nome: "João",
  idade: 5,
};
saudar(joao);
mudarNome(joao);
saudar({ nome: "Manoel", idade: 60, AB: true });

//Usando classes

class Client implements Humano {
  nome: string = "";
  idade?: number | undefined;
  ultimaCompra() {
    return console.log(new Date());
  }
  saudar(sobrenome: string): void {
    return console.log("Olá, meu nome é " + this.nome + " " + sobrenome);
  }
}
const meuCliente = new Client();
meuCliente.nome = "Han";
meuCliente.saudar("Solo");
meuCliente.ultimaCompra;

//Usando em funções

interface FuncaoCalculo {
  (a: number, b: number): number;
}

let potencia: FuncaoCalculo = function (base, exposente) {
  return base ** exposente;
};
console.log(potencia(2, 2));

/* 
Herança com interfaces 

obs: para relações entre iguais (classe x classe || interface x interface) o termo usado é o extends. 

já a contra partida, é o implements
*/

interface A {
  a(): void;
}
interface B {
  b(): void;
}

interface ABC extends A, B {
  c(): void;
}

class RealA implements A {
  a(): void {}
}

class RealAB implements A, B {
  a(): void {}
  b(): void {}
}

class RealABC implements ABC {
  a(): void {}
  b(): void {}
  c(): void {}
}

abstract class AbstrataABD implements A, B {
  a(): void {}
  b(): void {}
  abstract d(): void;
}
