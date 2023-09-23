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
const seuRegino = new Pessoa();
seuRegino.idade = 10;
console.log(seuRegino);

//static atributes/ methods - atribui caracteriticas e metodos à classe e não as  intâncias dela.(faz com q os métodos e as caracteristicas sejam da classe e não das cópias)

class Matematica {
  static PI = 3.1416;

  static areaCirc(raio: number) {
    return this.PI * raio * raio;
  }
}
class outraMatematica extends Matematica{

}
outraMatematica.areaCirc(4)

console.log(Matematica.areaCirc(10));

/*

CLASSES ABSTRATAS 

É a ideia ou conceito que gera as caracteristicas ações de uma classe. 
Possuem um método abstrato que pode ou não ser implementado propiamente por elas mas quem herda dessa classe tem, q implementar necessariamente este método.

A classe NÃO pode ser instânciada!
*/

abstract class Calculo {
  protected resultado: number = 0;

  abstract executar(...numeros: number[]): void;

  getResultado(): number {
    return this.resultado;
  }
}

class Soma extends Calculo {
  executar(...numeros: number[]): void {
    this.resultado = numeros.reduce((t, a) => t + a);
  }
}

class Multiplicacao extends Calculo {
  executar(...numeros: number[]): void {
    this.resultado = numeros.reduce((t, a) => t * a);
  }
}

let c1: Calculo = new Soma();
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
  private static instance: Unico = new Unico();
  private constructor() {}

  static getIntance() {
    return Unico.instance;
  }

  agora() {
    return new Date();
  }
}
console.log(Unico.getIntance().agora());

