
class Colaborador {
  constructor(
    readonly nome: string,
    readonly sobrenome: string,
    readonly cpf: number
  ) {}
}

export class Emprese {
  readonly name: string;
  private readonly colaboradores: Colaborador[] = [];
  protected readonly CNPJ: string;
  constructor(name: string, CNPJ: string) {
    this.name = name;
    this.CNPJ = CNPJ;
  }

  adicionarColaborador(colaboradr: Colaborador) {
    this.colaboradores.push(colaboradr);
  }

  mostrarFuncionarios(){
    return this.colaboradores;
  }
}
const Empresa = new Emprese("Emprese", "11.111.111/111-11");
console.log(Empresa.name);
console.log(Empresa);

const julio = new Colaborador("Julio", "Doe", 1);
console.log(julio);

console.log(Empresa);
Empresa.adicionarColaborador(julio);
console.log(Empresa.mostrarFuncionarios());

