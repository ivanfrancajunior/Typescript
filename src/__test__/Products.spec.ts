import { Product } from "../solid/srp/entities/Products";

describe("Product class", () => {
  afterAll(() => jest.clearAllMocks());
  it("should return product with properties name and price", () => {
    const sut = new Product("produto1", 11.9);

    expect(sut).toHaveProperty("name", "produto1");
    expect(sut).not.toHaveProperty("name", "produto");
    expect(sut).not.toHaveProperty("price", 11.92);
    expect(sut).toHaveProperty("price", 11.9);
  });
});
