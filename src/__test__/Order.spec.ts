import { Order } from "../solid/dip/entities/Order";
import { ShoppingCart } from "../solid/dip/entities/ShoppingCart";
import { MessageService } from "../solid/dip/services/MessageService";
import { PersistencyService } from "../solid/dip/services/PersistencyService";
import { Discount } from "../solid/dip/entities/Discount";
import { Product } from "../solid/dip/entities/Products";

describe("class Order", () => {
  it("shouldn't complet a order if", () => {
    class mockShopCart extends ShoppingCart {}
    class mockMessages extends MessageService {}
    class mockPersistence extends PersistencyService {}
    class mockDiscount extends Discount {}
    const sut = new Order(
      new mockShopCart(new mockDiscount()),
      new mockMessages(),
      new mockPersistence()
    );

    expect(sut.orderStatus).toBe("open");
  });
});
