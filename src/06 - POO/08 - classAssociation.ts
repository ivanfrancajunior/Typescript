//Agregação: Nesse tipo de associação, uma classe "possui" ou "agrega" uma ou mais instâncias de outras classes como parte de sua estrutura.

class Motor {}

class Carro {
  constructor(private motor: Motor) {}
}

//Composição: Similar à agregação, mas com uma diferença importante. Na composição, os objetos da classe agregada são criados e destruídos junto com os objetos da classe principal.
class Quarto {
    // Código do quarto
}

class Casa {
    private quartos: Quarto[];

    constructor() {
        this.quartos = [new Quarto(), new Quarto()];
    }
}

//Associação fraca: Nesse caso, uma classe pode ter uma referência a outra classe, mas essa segunda classe pode existir independentemente. 


class Endereco {
    // Código do endereço
}

class Pessoa {
    private endereco: Endereco | null;

    constructor(endereco: Endereco | null) {
        this.endereco = endereco;
    }
}

