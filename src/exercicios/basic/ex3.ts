export class contaCorrente {
  constructor(
    private readonly _titular: bankClient,
    private readonly _bankId: string,
    private readonly taxa: number = 0.05,
    private _saldo: number = 0
  ) {}

  sacar(valorSaque: number) {
    let totalValorSaque = valorSaque * this.taxa + valorSaque;

    if (this.podeSacar(totalValorSaque)) {
      this._saldo = this._saldo - totalValorSaque;
    }
    return console.log("Saldo insuficiente para esta operação.");
  }
  depositar(valorDeposito: number) {
    this._saldo + valorDeposito;
    return console.log("Valor depositado com exito.");
  }
  get saldo() {
    return this._saldo;
  }
  get bankId() {
    return this._bankId;
  }

  get proprietario() {
    return this._titular;
  }

  podeSacar(value: number): boolean {
    if (this._saldo < value) return false;
    return true;
  }
}
export class bankClient {
  constructor(
    private _nome: string,
    private _cpf: string,
    private _banckId: string
  ) {}

  get nome() {
    return this._nome;
  }
  get bankId() {
    return this._banckId;
  }
}
