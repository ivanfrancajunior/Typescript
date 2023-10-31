import { ShoppingCart } from "../solid/dip/entities/ShoppingCart";
import { Discount, TenPercentDiscount } from "../solid/dip/entities/Discount";
import { Product } from "../solid/dip/entities/Products";

describe("shoppingCart", () => {
  it("should be a empty cart when no product is added", () => {
    class MockDiscount extends Discount {}

    const sut = new ShoppingCart(new MockDiscount());

    expect(sut.isEmpty()).toBe(true);
  });
  it("should have a product added", () => {
    class MockProduct extends Product {}
    class MockDiscount extends Discount {}
    const sut = new ShoppingCart(new MockDiscount());

    const addItem = () => sut.addItem(new MockProduct("produte", 1));
    addItem();
    addItem();

    expect(sut.items.length).toBe(2);
  });
  it("should return a 2 at total value", () => {
    class MockProduct extends Product {}
    class MockDiscount extends Discount {}
    const sut = new ShoppingCart(new MockDiscount());

    const addItem = () => sut.addItem(new MockProduct("produte", 1));
    addItem();
    addItem();

    expect(sut.total()).toBe(2);
  });
  it("should keep returning 2 at total value with discount ", () => {
    class MockProduct extends Product {}
    class MockDiscount extends Discount {}
    const sut = new ShoppingCart(new MockDiscount());

    const addItem = () => sut.addItem(new MockProduct("produte", 1));
    addItem();
    addItem();

    expect(sut.totalWhithDiscount()).toBe(2);
  });
  it("should clear a cart ", () => {
    class MockProduct extends Product {}
    class MockDiscount extends Discount {}
    const sut = new ShoppingCart(new MockDiscount());

    const addItem = () => sut.addItem(new MockProduct("produte", 1));
    addItem();
    addItem();
    expect(sut.items.length).toBe(2);
    sut.clear();
    expect(sut.items.length).toBe(0);
  });
  it("should remove one item at cart ", () => {
    class MockProduct extends Product {}
    class MockDiscount extends Discount {}
    const sut = new ShoppingCart(new MockDiscount());

    const addItem = () => sut.addItem(new MockProduct("produte", 1));
    addItem();
    addItem();
    expect(sut.items.length).toBe(2);
    sut.removeItem(1);
    expect(sut.items.length).toBe(1);
  });
});
