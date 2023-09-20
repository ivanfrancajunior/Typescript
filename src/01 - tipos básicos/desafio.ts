
/*
    EXERCICO:

    Criar um objeto funcionário com:
        - Array de strings com os nomes dos surpevisores
        - Função de bater ponto que recebe a hora (número)
            e retorna uma string
            -> Ponto normal (<= 8)
            -> Fora do horário (> 8)
*/


// Desafio

type BankAcc = {
    saldo:number; 
    depositar :(value:number) => void 
}

type Correntista = {
    nome:string; 
    contaBancaria:BankAcc; 
    contatos:[string, string]
}

let contaBancaria:BankAcc = {
    saldo: 3456,
    depositar(valor:number) {
        this.saldo += valor
    }
}
 

let correntista :Correntista = {
    nome: 'Ana Silva',
    contaBancaria: contaBancaria,
    contatos: ['34567890', '98765432']
}
 
correntista.contaBancaria.depositar(3000)
console.log(correntista)