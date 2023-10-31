import { Item } from "../interfaces/types";
export interface shoppingCartProtocol {
  items: Readonly<Item[]>;
  addItem(item: Item): void;
  removeItem(index: number): void;
  total(): number;
  totalWhithDiscount(): number;
  isEmpty(): boolean;
  clear(): void;
}
