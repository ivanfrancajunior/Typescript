import { Pessoa } from "./02 - modificadoresDeAcesso";

/* Herança: 
No Typescript pra sinalizar herança utiliza-se o 'extends'. 
Como implicito da palavra, quando uma classe herda da outra ele herda todos os métodos e atributos da classe herdada.


Superclasses: 

As classes extendidas ou herdadas são chamadas de super-classes e podemos chamar a prop 'super' nas classes que herdam dela pra ter acesso a m metodo ou propriedade da super-classe. 

As classes que herdam das super  também são chamadas de sub-classes. 

caso exista  a necessidade da subclasses utilizar um conrutor o metodo super deve ser refeenciado na criação da mesma e ai sim passadas suas propias implementações. (item 3)
*/

class Aluno extends Pessoa {
  getNomeCompleto(): string {
    return `Aluno diz: ${this.name} ${this.sobrenome} `;
  }
}

// #3
class Cliente extends Pessoa {
  constructor(
    name: string,
    sobrenome: string,
    idade: number,
    cpf: string,
    public sala: string
  ) {
    super(name, sobrenome, idade, cpf);
  }

  getNomeCompleto(): string {
    return `Cliente diz: ${this.name} ${this.sobrenome} `;
  }
}

const manuel = new Aluno("Manuel", "Pastel", 60, "12345678-99");
const joaquim = new Cliente("Joaquim", "Paskin", 60, "12345678-99", "sala 2");
console.log(manuel.getNomeCompleto());
console.log(joaquim.getNomeCompleto());
