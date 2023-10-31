import { Discount } from "./Discount";
import { Item } from "./interfaces/types";

export class ShoppingCart {
  private readonly _items: Item[] = [];

  constructor(private readonly discount: Discount) {}
  get items(): Readonly<Item[]> {
    return this._items;
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

  totalWhithDiscount() {
    return this.discount.calculate(this.total());
  }

  isEmpty(): boolean {
    return this._items.length === 0;
  }

  clear(): void {
    console.log("Seu carrinho foi esvaziado!");
    this._items.length = 0;
  }
}
