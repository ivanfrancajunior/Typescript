const nome: string = "Jota"; //tipo string

const num: number = 5; //tipo number

const confia: boolean = true; //tipo boolean

const arr: string[] = ["array de strings"]; //tipo array (do tipo string)

const colors: [string, string, string] = ["tupla", "tupla", "tupla"]; //tipo tupla

//enum | enumerator
enum Week {
  domingo,
  seunda,
  terça,
  quarta,
  quinta,
  sexta,
  sabado,
}
// console.log(Week.domingo.toString());

const qlqrCoisa: any = "posso ser qlqr valor";

//funções como tipos
function calc(a: number, b: number) {
  return a * b;
}

const sum = calc;
let value = sum(2, 3);
// console.log(value);

//Objetos
const pessoa: { name: string; age: number } = {
  name: "Jota",
  age: 29,
};

//type alias

type Funcionario = {
  nome: string;
  idade: number;
  supervisores: string[];
  baterPonto(value: number): string;
};

const funcionario: Funcionario = {
  nome: "Jota",
  idade: 29,
  supervisores: ["João", "Maria"],
  baterPonto(time: number) {
    let atraso = "";
    const data = new Date();
    const dia = data.getDate();
    const mes = data.getMonth() + 1;
    if (time > 8) {
      return (atraso = "ATRASADO");
    } else {
      atraso = "PONTO NORMAL";
    }
    return `[${atraso}] - O funcionário saiu às ${time} no dia ${dia}/${mes}.`;
  },
};

console.log(funcionario.baterPonto(7));

//Union types

let notas: string | number = 5;
notas = "7";

//never

function falha(msg: string): never {
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

