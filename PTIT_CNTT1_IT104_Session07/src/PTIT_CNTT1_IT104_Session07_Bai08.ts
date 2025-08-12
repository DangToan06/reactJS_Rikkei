import { Account } from "./PTIT_CNTT1_IT104_Session07_Bai07.js";

class CheckingAccount extends Account {
  constructor(
    accountNumber: number,
    balance: number,
    history: string[],
    status: boolean,
    public overdraftLimit: number = 5000000
  ) {
    super(accountNumber, balance, history, status);
  }

  withdraw(money: number): void {
    if (this.balance > 0) {
      const now = new Date();
      console.log(`Rut ${money.toLocaleString("vi-VN")}VND thanh cong`);
      this.balance -= money;
      this.history.push(
        `Da rut ${money.toLocaleString("vi-VN")}VND vao luc ${now}`
      );
    } else {
      if (this.balance >= 0) {
        const now = new Date();
        console.log(`Rut ${money.toLocaleString("vi-VN")}VND thanh cong`);
        this.balance -= money;
        this.history.push(
          `Da rut ${money.toLocaleString("vi-VN")}VND vao luc ${now}`
        );
      } else {
        console.log("so tien muons rut vuot qua gioi han");
      }
    }
  }

  showHistory() {
    this.history.forEach((e) => console.log(e));
  }
}

let bank = new CheckingAccount(111111111111, 0, [], true, 2);

bank.deposit(100000);
bank.withdraw(50000);
bank.withdraw(50000);
bank.withdraw(5000000);
bank.withdraw(1);
bank.showHistory();
