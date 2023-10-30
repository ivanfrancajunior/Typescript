import { Item } from "./interfaces/types";

export class Product implements Item {
    constructor(public name: string, public price: number) {}
  }
  