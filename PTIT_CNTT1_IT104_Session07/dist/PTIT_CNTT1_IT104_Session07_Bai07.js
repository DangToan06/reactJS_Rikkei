export class Account {
    constructor(accountNumber, balance, history, status) {
        this.accountNumber = accountNumber;
        this.balance = balance;
        this.history = history;
        this.status = status;
    }
    deposit(money) {
        if (money > 0) {
            const now = new Date();
            this.balance += money;
            console.log(`Nap ${money.toLocaleString("vi-VN")}VND thanh cong`);
            this.history.push(`Da nap ${money.toLocaleString("vi-VN")}VND vao luc ${now}`);
        }
    }
    withdraw(money) {
        if (this.balance > 0) {
            const now = new Date();
            console.log(`Rut ${money.toLocaleString("vi-VN")}VND thanh cong`);
            this.balance -= money;
            this.history.push(`Da rut ${money.toLocaleString("vi-VN")}VND vao luc ${now}`);
        }
        else {
            console.log("Tai khoan khong co tien de rut");
        }
    }
    showHistory() {
        this.history.forEach((e) => console.log(e));
    }
}
class SavingAccount extends Account {
    constructor(accountNumber, balance, history, status, interestRate) {
        super(accountNumber, balance, history, status);
        this.interestRate = interestRate;
    }
}
let bank = new SavingAccount(111111111111, 0, [], true, 2);
// bank.withdraw(20000);
// bank.deposit(100000);
// bank.withdraw(50000);
// bank.showHistory();
