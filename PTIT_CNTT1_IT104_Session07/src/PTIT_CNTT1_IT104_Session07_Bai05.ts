export class Account {
  constructor(
    protected id: number,
    private name: string,
    private password: string,
    protected isLogin: boolean,
    private role: string
  ) {}

  logout() {
    if (this.isLogin) {
      console.log("Logout success!!");
      this.isLogin = false;
    }
  }
}

export enum userStatus {
  ACTIVE = "ACTIVE",
  BANNED = "BANNED",
}

export class userAcc extends Account {
  constructor(
    id: number,
    name: string,
    password: string,
    isLogin: boolean,
    role: string,
    public status: string
  ) {
    super(id, name, password, isLogin, role);
  }

  login(): void {
    if (this.status === userStatus.ACTIVE) {
      console.log("Login is success!!");
      this.isLogin = true;
    } else if (this.status === userStatus.BANNED) {
      console.log("Account is banned");
    }
  }
  getId() {
    return this.id;
  }
}

let account1 = new userAcc(
  1111,
  "DangToan",
  "123",
  false,
  "Admin",
  userStatus.ACTIVE
);

let account2 = new userAcc(
  1112,
  "Duong",
  "111",
  false,
  "User",
  userStatus.BANNED
);

// account1.login();
// account2.login();
// account1.logout();
