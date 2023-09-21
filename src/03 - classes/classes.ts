class Data {
  // tipos públicos
  data: number;
  mes: number;
  ano: number;
  constructor(data: number = 1, mes: number = 1, ano: number = 1970) {
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
  constructor(
    public nome: string,
    public preco: number,
    public desconto: number = 0
  ) {
    this.nome = nome;
    this.preco = preco;
    this.desconto = desconto;
  }
  public resumo(): string {
    return ` ${this.nome} custa R$ ${this.preco} e está com ${
      this.desconto * 100
    }% off.`;
  }
  public precoComDesconto(): string {
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
  private velocidadeAtual: number = 0;

  constructor(
    public marca: string,
    public modelo: string,
    private velocidadeMaxima: number = 200
  ) {}

  protected alterarVelocidade(delta: number): number {
    const novaVelocidade = this.velocidadeAtual + delta;
    const velocidadeValida =
      novaVelocidade >= 0 && novaVelocidade <= this.velocidadeMaxima;

    if (velocidadeValida) {
      this.velocidadeAtual = novaVelocidade;
    } else {
      this.velocidadeAtual = delta > 0 ? this.velocidadeMaxima : 0;
    }

    return this.velocidadeAtual;
  }

  public acelerar(): number {
    return this.alterarVelocidade(5);
  }

  public frear(): number {
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
  constructor(modelo: string, velocidadeMaxima: number) {
    super("Ferrari", modelo, velocidadeMaxima);
  }

  public acelerar(): number {
    return this.alterarVelocidade(20);
  }

  public frear(): number {
    return this.alterarVelocidade(-15);
  }
}
const f40 = new Ferrari("f40", 320);
f40.acelerar();
f40.acelerar();

//getters & Setters

class Pessoa {
  private _idade: number = 0;

  get idade(): number {
    return this._idade;
  }

  set idade(valor: number) {
    if (valor >= 0 && valor <= 120) {
      this._idade = valor;
    }
  }
}
