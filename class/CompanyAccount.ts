import { DioAccount } from './DioAccount';

export class CompanyAccount extends DioAccount {
  constructor(name: string, accountNumber: number) {
    super(name, accountNumber);
  }

  getLoan = (amount: number): void => {
    if (this.getStatus()) {
      const balance = this.getBalance();
      this.setBalance(balance + amount);
      console.log(`Você pegou um empréstimo de R$ ${amount}`);
    }
  };
}
