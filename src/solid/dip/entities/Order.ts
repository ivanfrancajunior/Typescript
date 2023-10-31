/*


---------------------------------------------------------------------------

Problemática: E se fosse necessário incluir descontos nos preços como isso seria feiro usando este princípio? 

---------------------------------------------------------------------------

*/

import { MessageServiceProtocol } from "./interfaces/messagingProtocol";
import { PersistencyProtocol } from "./interfaces/persistencyProtocol";
import { shoppingCartProtocol } from "./interfaces/shoppingCartProtocol";
import { OrderStatus } from "./interfaces/types";

export class Order {
  private _orderStatus: OrderStatus = "open";

  constructor(
    private readonly cart: shoppingCartProtocol,
    private readonly messaging: MessageServiceProtocol,
    private readonly persistency: PersistencyProtocol
  ) {}

  get orderStatus(): Readonly<OrderStatus> {
    return this._orderStatus;
  }

  checkout(): void {
    if (this.cart.isEmpty()) {
      this.messaging.sendMessage("Seu carrinho está vazio");
      return;
    }
    this._orderStatus = "closed";
    this.messaging.sendMessage("seu pedido foi recebido");
    this.persistency.saveOrder();
    this.cart.clear();
  }
}
