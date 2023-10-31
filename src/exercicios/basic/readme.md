## Exercício 1
Crie uma classe que representa um funcionário, registrando seu nome, salário e data de admissão. Em seguida, crie uma classe que represente um departamento de uma empresa, registrando o nome e os funcionários que nele trabalham (para isso use um vetor, considere um máximo de 100 funcionários). Por fim, crie uma classe que representa uma empresa, registrando seu nome, CNPJ e departamentos (considere um máximo de 10 departamentos). Faça um programa que:
a) Crie uma empresa;
b) Adicione a esta empresa alguns departamentos;
c) Adicione aos departamentos alguns funcionários;
d) Dê aumento de 10% a todos os funcionários de um determinado departamento.

## Exercício 2
Considere um vetor de 10 números inteiros positivos maiores que zero e um único número X inteiro, também positivo e maior que zero. Faça um programa para:
(a) Ler pelo teclado os valores do vetor;
(b) Ler pelo teclado o número X;
(c) Verificar se o vetor está em ordem crescente, decrescente ou não ordenado;
(d) Dizer quantos números no vetor são maiores que X, menores que X e iguais a X.

## Exercício 3
Crie uma classe para representar uma conta-corrente, com métodos para depositar uma quantia, sacar uma quantia e obter o saldo. Para cada saque será debitada também uma taxa de operação equivalente à 0,5% do valor sacado. Para a criação de objetos dessa classe será possível (opcional) informar o valor do saldo da conta.

## Exercício 4
Verifique se as componentes de um vetor de 10 componentes lidos pelo teclado formam uma progressão aritmética, informando se sim ou não.

## Exercício 5
Escreva a classe ConversaoDeUnidadesDeVolume com métodos estáticos para conversão das unidades de volume segundo a lista do exercício 1.5. Cada conversão deve ser realizada por um método que recebe como parâmetro um valor para converter. Crie uma classe Teste para realizar a chamada dos métodos criados.

## Exercício 6
O volume de uma piscina olímpica é de 1.890 metros cúbicos. Usando a classe ConversaoDeUnidadesDeVolume (exercício 5), escreva um programa em Java que mostre qual é o volume de uma piscina olímpica em litros, pés cúbicos e centímetros cúbicos. Escreva métodos adicionais para a classe ConversaoDeUnidadesDeVolume, se necessário.

## Exercício 7
Crie uma classe IntegerSet para representar um conjunto de números inteiros. Cada objeto da classe IntegerSet pode armazenar inteiros no intervalo de 0 até um valor máximo específico para cada objeto. O conjunto deve ser representado por um array de booleanos. O elemento do array na posição i é verdadeiro se e somente se o inteiro i pertencer ao conjunto. O construtor inicializa o objeto como um conjunto vazio (isto é, um conjunto cuja representação de array contém todos os valores falso). Forneça métodos para implementar as operações de união, interseção e diferença de conjuntos. Forneça um método para inserir um novo elemento no conjunto e outro método para excluir um elemento do conjunto. Forneça ainda um método para converter um conjunto para string. Faça uma aplicação para testar a classe.

## Exercício 8
Escreva uma classe para representar grafos. Escolha entre a representação por listas de adjacência ou por matriz de adjacência. A classe deve oferecer uma operação para determinar se dois vértices são vizinhos, e outra operação para determinar a lista de todos os vértices que são vizinhos de um dado vértice. Considere que cada vértice é representado por um número inteiro. Faça um aplicativo para testar a classe.