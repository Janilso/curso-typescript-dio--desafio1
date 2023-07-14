export abstract class DioAccount {
  private readonly name: string;
  private readonly accountNumber: number;
  balance: number = 0;
  private status: boolean = true;

  constructor(name: string, accountNumber: number) {
    this.name = name;
    this.accountNumber = accountNumber;
  }

  getName = (): string => {
    return this.name;
  };

  deposit = (amount: number): void => {
    const balance = this.getBalance();
    this.setBalance(balance + amount);
    this.mensageReturn('depositou', amount);
  };

  withdraw = (amount: number): void => {
    if (this.validateStatus() && amount <= this.getBalance()) {
      const balance = this.getBalance();

      this.setBalance(balance - amount);
      this.mensageReturn('sacou', amount);
    } else {
      console.log('Saldo insuficiente ou conta inativa');
    }
  };

  getBalance = (): number => {
    return this.balance;
  };

  setBalance = (balance: number): void => {
    this.balance = balance;
  };

  getStatus = (): boolean => {
    return this.status;
  };

  private mensageReturn = (operation: string, amount: number): void => {
    console.log(
      `Você ${operation} R$ ${amount}, seu novo saudo é R$ ${this.getBalance()}`
    );
  };

  private validateStatus = (): boolean => {
    if (this.status) {
      return this.status;
    }

    throw new Error('Conta inválida');
  };
}
