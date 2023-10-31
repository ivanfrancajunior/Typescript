export abstract class Discount {
  protected discount: number = 0;

  calculate(price: number): number {
    return price - price * this.discount;
  }
}

export class TenPercentDiscount extends Discount {
  protected readonly discount: number = 0.1;
}
export class TwentyPercentDiscount extends Discount {
  protected readonly discount: number = 0.2;
}

export class NoDiscount extends Discount {
  protected readonly discount: number = 0;
}
