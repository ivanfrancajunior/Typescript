/*
Open/Close principle: 

Diz que as entidades ou métodos devem estar fechadas modificações e abertas para extenções. 

Ou seja você criar uma classe pra ser extendida mas n deveria modificar a clase base.

---------------------------------------------------------------------------

Problemática: E se fosse necessário incluir descontos nos preços como isso seria feiro usando este princípio? 

---------------------------------------------------------------------------

*/

import { MessageService } from "../services/MessageService";
import { PersistencyService } from "../services/PersistencyService";
import { ShoppingCart } from "./ShoppingCart";
import { OrderStatus } from "./interfaces/types";

export class Order {
  private _orderStatus: OrderStatus = "open";

  constructor(
    private readonly cart: ShoppingCart,
    private readonly messaging: MessageService,
    private readonly persistency: PersistencyService
  ) {}

  get orderStatus(): Readonly<OrderStatus> {
    return this._orderStatus;
  }

  checkout(): void {
    if (this.cart.isEmpty()) {
      this.messaging.sendMessage("Seu carrinho está vazio");
      return;
    }
    this.messaging.sendMessage("seu pedido foi recebido");
    this.persistency.saveOrder();
    this.cart.clear();
    this._orderStatus = "closed";
  }
}
