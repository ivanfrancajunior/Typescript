abstract class Char {
  constructor(
    protected name: string,
    protected power: number,
    protected life: number
  ) {}
  hit(oponent: Char) {
    console.log(`${this.name} está atacando`);
    return oponent.lostLife(this.power);
  }
  lostLife(power: number): void {
    this.life -= power;

    if (this.life <= 0) {
      return console.log("ficou fodido");
    }
    return console.log(`${this.name} agora possui ${this.life} de vida...`);
  }

  abstract speak(): void;
}

class Hero extends Char {
  speak(): void {
    return console.log("Que isso doga... ");
  }
}

class Monster extends Char {
  speak(): void {
    return console.log("tame !");
  }
}

const julia = new Monster("julia", 999, 1000);

const qlqrUm = new Hero("Podia ser vc", 100, 1000);

julia.speak();
julia.hit(qlqrUm);
qlqrUm.speak();

