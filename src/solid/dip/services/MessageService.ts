import { MessageServiceProtocol } from "../entities/interfaces/messagingProtocol";

export class MessageService implements MessageServiceProtocol {
  sendMessage(message: string): void {
    console.log("Mensagem enviada!: ", message);
  }
}
