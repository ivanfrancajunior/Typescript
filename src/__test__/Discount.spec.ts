import { NoDiscount, TenPercentDiscount } from "../solid/ocp/entities/Discount";

describe("Discount class", () => {
  afterAll(() => jest.clearAllMocks());
  it("should not have discount ", () => {
    const sut = new NoDiscount();
    const testValue = 10;
    const currentCount = sut.calculate(testValue);

    expect(currentCount).toBe(10);
  });
  it("should not have discount ", () => {
    const sut = new TenPercentDiscount();
    const testValue = 10;
    const testValueWithDiscount = testValue - testValue * 0.1;
    const currentCount = sut.calculate(testValue);

    expect(currentCount).not.toBe(10);
    expect(currentCount).toBe(testValueWithDiscount);
  });
});
