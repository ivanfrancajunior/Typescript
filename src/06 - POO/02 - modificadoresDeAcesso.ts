console.log("Server running 🔥");
/* 
Public: Usa-se public pra dizer que o método ou atributo são acessiveis dentro e fora da classe e m todas as sub-classes herdadas desta classe.

Private: Usa-se metodos e atributos private quando se quer que os mesmos sejam acessives somente dentro da classe de origem.

Protected: Usando protected, os metodos e atributos passam a acessados também pelas classes que herdam da classe de origem. 

*/

export class Pessoa {
  constructor(
    public name: string,
    public sobrenome: string,
    private idade: number,
    protected cpf: string
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
}
