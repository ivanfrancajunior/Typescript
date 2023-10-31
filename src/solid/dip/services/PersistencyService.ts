import { PersistencyProtocol } from "../entities/interfaces/persistencyProtocol";

export class PersistencyService implements PersistencyProtocol {
  saveOrder(): void {
    console.log("Pedido salvo com sucesso!");
  }
}
