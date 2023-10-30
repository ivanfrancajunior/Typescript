console.log("oi");
/*
A ideia é desse padrão de projeto é manter o construtor privado, evitando novas instâncias de uma classe onde não se quer isso. 

Além de privar o construtor, fazermos uma 'instancia' da propia classe nela mesmo e um método em q o retorno é esta intãncia. 

Já existindo essa instância, a classe não é recriada e  usamos um método estático nesse método que faz com que o método, seja acessivel a partir da classe mas elimina a possibilidade de novas instâncias.

*/
export class Database {
  private static database: Database;
  private constructor(
    private host: string,
    private user: string,
    private port: number
  ) {}

  public connect() {
    console.log(`Conectado a ${this.host} on ${this.port}!`);
  }
  static getDatabase(host: string, user: string, port: number) {
    if (Database.database) {
      console.log("Retomando conexão... ");
      return Database.database;
    }

    Database.database = new Database(host, user, port);
    console.log('Iniciando conexão...');
    
    return Database.database;
  }
}

const db1 = Database.getDatabase("localhost", "jota", 3000);
const db2 = Database.getDatabase("localhost", "jota", 3001);

db1.connect();
console.log('---------------------------');
db2.connect();
