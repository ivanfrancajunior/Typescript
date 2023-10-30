
/*
getters: 

Usados para OBTER o valor privado de um atribuito sem a necessidade de criar um método.

setters: 
Usados para MODIFICAR ou ATRIBUIR um novo valor a um atributo privado  em uma classe sem a necessidade de criar um método.

*/

export class Pessoa {
  constructor(
    public name: string,
    public sobrenome: string,
    private idade: number,
    protected _cpf: string
  ) {}
  getIdade() {
    return this.idade;
  }
  getCpf() {
    return this.cpf;
  }
  getNomeCompleto() {
    return `${this.name} ${this.sobrenome}`;
  }

  get cpf() {
    return this._cpf.replace(/\D/g, "");
  }
  set cpf(cpf: string) {
    cpf = this._cpf;
  }
}
