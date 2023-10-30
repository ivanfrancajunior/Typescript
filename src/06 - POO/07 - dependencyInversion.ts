/*  
    um princípio que sugere que as classes de alto nível não devem depender de classes de baixo nível. Em vez disso, ambas as classes devem depender de abstrações.
*/

class Escritor {
  constructor(
    private _nome: string,
    private _ferramenta: Ferramenta | null = null
  ) {}

  get nome() {
    return this._nome;
  }

  set nome(nome: string) {
    this._nome = nome;
  }

  set ferramenta(tool: Ferramenta) {
    this._ferramenta = tool;
  }

  escrever() {
    if (!this._ferramenta) return;
    return this._ferramenta.escrever();
  }
}
abstract class Ferramenta {
  constructor(private _nome: string) {}
  abstract escrever(): void;
  get nome() {
    return this._nome;
  }
}

class Caneta extends Ferramenta {
  escrever(): void {
    return console.log(`${this.nome} está escrevendo...`);
  }
}
const caneta = new Caneta("bic");
const manuel = new Escritor("Manuel Gome");
manuel.ferramenta = caneta;

manuel.escrever();
