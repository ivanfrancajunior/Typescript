/*
Uma função que recebe uma classe/função e que pode adicionar outros métodos,paramentros e/ou atributos a esta classe ou função. 

*/
//1 - decorator de classe
@invertArgColor("verde", "gato")
export class Animal {
  constructor(public cor: string) {}
}

function invertArgColor(param1: string, param2: string) {
  return function <T extends new (...args: any[]) => any>(target: T): T {
    console.log("olá do seu decorator favorito");

    return class extends target {
      cor: string;
      constructor(...args: any[]) {
        super(...args);
        this.cor = this.invert(args[0]);
      }

      invert(value: string): string {
        return value.split("").reverse().join("") + " " + param1 + " " + param2;
      }
    };
  };
}

const animal = new Animal("vermelho");
console.log(animal.cor);

//2 - decorators com parâmetros
function noNamefor<T>(target: T) {
  console.log("sou uma decorator associado a : ", target);
  return target;
}

@noNamefor
class noCriativityToday {
  constructor(public name: string, public age: number) {
    console.log("fui instanciado!");
  }
}

const a = new noCriativityToday("marcelo", 10);


//3 decorators factory
function logTarget(target: new (args: any[]) => any) {
  return console.log(target);
}

@logTarget
class IDK {
  sum(a: number, b: number) {
    return console.log(a + b);
  }
}
