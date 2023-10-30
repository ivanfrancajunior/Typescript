import { MessageService } from "../solid/srp/services/MessageService";

describe("class MessageService", () => {
  it("should return undefinided", () => {
    const sut = new MessageService();

    expect(sut.sendMessage("test")).toBeUndefined();
  });

  it("should call 'console.log' once", () => {
    const sut = new MessageService();

    const logSpy = jest.spyOn(console, "log");

    sut.sendMessage("");

    expect(logSpy).toHaveBeenCalledTimes(1);
  });

  it("should call 'console.log' with 'Mensagem enviada!:' end message", () => {
    const sut = new MessageService();
    const message = "teste";
    const logSpy = jest.spyOn(console, "log");

    sut.sendMessage(message);

    expect(logSpy).toHaveBeenCalledWith("Mensagem enviada!: ", message);
  });
});
