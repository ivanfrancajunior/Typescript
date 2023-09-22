/*
USO: Embora  a ideia seja ter tipos mais flexiveis e genéricos, não queremos usar any pq dessa forma, ficamos simplesmente sem recursos para validar o valor de alguma forma por parte do complilador e  assim deixand q erros passem.

Fora isso a gente perde o autocomplete.
*/
function echo(value: any) {
  return value;
  // no auto complete
}

function echoMelhorado<T>(value: T) {
  return value;
}
echo(55).length(); // sem reclamações do compilador...

echoMelhorado("Marcela").toLowerCase(); //autocomplete 🤤

//Usando Generics: #1 - ARRAYS:

const avaliacoes: Array<number> = [10, 9, 8, 7];
avaliacoes.push(8.4);

//Usando Generics: #2 - ARRAYS:

function imprimir<T>(args: T[]) {
  args.forEach((elemento) => console.log(elemento));
}
imprimir([1, 2, 3]);

imprimir<number>([1, 2, 3]);

imprimir<string>(["Ana", "Bia", "Carlos"]);
type Aluno = { nome: string; idade: number };

imprimir<Aluno>([
  { nome: "Fulano", idade: 22 },
  { nome: "Cicrano", idade: 23 },
  { nome: "Beltrano", idade: 24 },
]);

//Função genérica:
type Generica = <T>(data: T) => T;

const fnGenerica: Generica = (value) => value;
console.log(fnGenerica("abacate!"));
