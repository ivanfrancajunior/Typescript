/**
 Metodos estáticos: 

 São métodos disponveis sem que seja necessário instanciar a classe.
 */
export class Pessoa {
  
  constructor(
    public name: string,
    public sobrenome: string,
    private idade: number,
    protected cpf: string
  ) {}

  static falaOi(){
    return console.log('oi'); 
  }
}
const pessoa = new Pessoa("joe", "doe", 1, "12121");

console.log(pessoa);
Pessoa.falaOi()