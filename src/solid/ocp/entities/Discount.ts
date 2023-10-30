export abstract class Discount {

  abstract calculate(price: number): number;
}


export class TenPercentDiscount extends Discount{
  private readonly discount: number = 0.1
    calculate(price: number): number {
        return price - price * this.discount;
    }
}
