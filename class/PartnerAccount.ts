import { DioAccount } from './DioAccount';

export class PartnerAccount extends DioAccount {
  constructor(name: string, accountNumber: number) {
    super(name, accountNumber);
  }

  deposit = (amount: number): void => {
    const balance = this.getBalance();
    this.setBalance(balance + amount + 10);
    console.log(
      `Você depositou R$ ${amount} e ganhou R$ 10, seu novo saudo é R$ ${this.getBalance()}`
    );
  };
}
