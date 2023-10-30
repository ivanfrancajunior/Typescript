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
    this._orderStatus = "closed";
    this.messaging.sendMessage("seu pedido foi recebido");
    this.persistency.saveOrder();
    this.cart.clear();
  }
}
