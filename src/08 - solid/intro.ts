console.log("🔥");

/*
    S.O.L.I.D - um acrônimo cinco princípios da programação que foram reunidos para nos ajudar a manter um código limpo flexível e fácil de ser mantido.
-----------
    ESTUDO DE CASO: carrinho de compras. 
    
    A ideia é pegar um código que só funciona e ir aplicando os principios um a um até se chegar na melhor versão possivel deste mesmo código

*/

export type Item = { name: string; price: number };

export type OrderStatus = "open" | "closed";

export class ShoppingCart {
  private readonly _items: Item[] = [];
  private _orderStatus: OrderStatus = "open";

  get items(): Readonly<Item[]> {
    return this._items;
  }
  get orederStatus(): Readonly<OrderStatus> {
    return this._orderStatus;
  }
  addItem(item: Item) {
    this._items.push(item);
  }
  removeItem(index: number) {
    this._items.splice(index, 1);
  }
  total(): number {
    const totalValue = this._items.reduce(
      (total, product) => total + product.price,
      0
    );
    return Number(totalValue.toFixed(2));
  }
  checkout():void {
    if (this.isEmpty()) {
      console.log("Seu carrinho está vazio");
      return;
    }

    this._orderStatus = "closed";
    this.sendMessage("seu pedido foi recebido");
    this.saveOrder();
    this.clear();
  }
  isEmpty(): boolean {
    return this._items.length === 0;
  }
  sendMessage(message: string):void {
    console.log("Mensagem enviada!: ", message);
  }
  saveOrder():void {
    console.log("Pedido salvo com sucesso!");
  }
  clear():void {
    console.log("Seu carrinho foi esvaziado!");
    this._items.length = 0;
  }
}
