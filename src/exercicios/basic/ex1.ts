export class Funcionario {
  constructor(
    public nome: string,
    private _salario: number,
    private _dataAdmissao: Date,
    private _dataDesligamento: Date,
    private _setor: string
  ) {}

  set setor(setor: string) {
    this._setor = setor;
  }
  get setor() {
    return this._setor;
  }

  set dataAdimissao(data: Date) {
    this._dataAdmissao = data;
  }
  get dataAdimissao() {
    return this._dataAdmissao;
  }

  set salario(valor: number) {
    this._salario = valor;
  }
  get salario() {
    return this._salario;
  }

  set dataDesligamento(data: Date) {
    this._dataDesligamento = data;
  }
  get dataDesligamento() {
    return this._dataDesligamento;
  }

  falarOi() {
    return console.log(
      `Olá eu sou ${this.nome}, estou no setor de ${this._setor} e fui adimitido em ${this._dataAdmissao}!`
    );
  }
}

export class Setor {
  constructor(
    public readonly nome: string,
    private readonly _colaboradores: Funcionario[] = []
  ) {}

  adicionarFuncionario(colaborador: Funcionario, salario: number) {
    if (this.colaboradores.length > 100) return;
    this.colaboradores.push(colaborador);
    colaborador.setor = this.nome;
    colaborador.dataAdimissao = new Date();
    colaborador.salario = salario;
  }

  removerFuncionario(index: number) {
    this._colaboradores.slice(index, 1);
  }

  get colaboradores() {
    return this._colaboradores;
  }
}

export class Empresa {
  constructor(
    public readonly nome: string,
    public readonly CNPJ: string,
    private readonly setores: Setor[] = []
  ) {}

  adicionarDepartamentos(novoSetor: Setor) {
    if (this.setores.length > 10) return;

    return this.setores.push(novoSetor);
  }

  aumentarSalarioSetor(percentagem: number, departamento: Funcionario[]) {
    departamento.forEach((colaborador) => {
      colaborador.salario = colaborador.salario + colaborador.salario * percentagem;
    });
  }
}


