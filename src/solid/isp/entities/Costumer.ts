import { CostumerProtocol, dontKnowANameFor } from "./interfaces/costumerProtocol";

class PersonalCostumer implements CostumerProtocol {
  constructor(
    public name: string,
    private cpf: number,
    public type: dontKnowANameFor = "personal"
  ) {}
}

class EnterpriseCostumer implements CostumerProtocol {
  constructor(
    public name: string,
    private cpf: number,
    private cnpj: number,
    public type: dontKnowANameFor = "enterprise"
  ) {}
}
