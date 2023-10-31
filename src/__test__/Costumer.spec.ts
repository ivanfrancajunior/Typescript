import {
  PersonalCostumer,
  EnterpriseCostumer,
} from "../solid/dip/entities/Costumer";

describe("Costumer", () => {
  it("should be a personal costumer type", () => {
    const sut = new PersonalCostumer("pessoa", 2);

    expect(sut).toHaveProperty("name", "pessoa");
    expect(sut).toHaveProperty("cpf", 2);
    expect(sut).toHaveProperty("type", "personal");
  });

  it("should be a enterprise costumer type", () => {
    const sut = new EnterpriseCostumer("empresa", 123, 321);

    expect(sut).toHaveProperty("name", "empresa");
    expect(sut).toHaveProperty("cpf", 123);
    expect(sut).toHaveProperty("cnpj", 321);
    expect(sut).toHaveProperty("type", "enterprise");
  });
});
