import { PersistencyService } from "../solid/srp/services/PersistencyService";

describe("class persistency", () => {
  it("should return undefinided", () => {
    const sut = new PersistencyService();

    expect(sut.saveOrder()).toBeUndefined();
  });
  it("should call 'console.log' once time ", () => {
    const sut = new PersistencyService();
    const spyLog = jest.spyOn(console, "log");
    sut.saveOrder();
    expect(spyLog).toBeCalledTimes(1);
  });
  it("should call 'console.log' with 'Pedido salvo com sucesso!' ", () => {
    const sut = new PersistencyService();
    const spyLog = jest.spyOn(console, "log");
    sut.saveOrder();
    expect(spyLog).toHaveBeenCalledWith("Pedido salvo com sucesso!");
  });
});
