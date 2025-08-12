export class Account {
    constructor(id, name, password, isLogin, role) {
        this.id = id;
        this.name = name;
        this.password = password;
        this.isLogin = isLogin;
        this.role = role;
    }
    logout() {
        if (this.isLogin) {
            console.log("Logout success!!");
            this.isLogin = false;
        }
    }
}
export var userStatus;
(function (userStatus) {
    userStatus["ACTIVE"] = "ACTIVE";
    userStatus["BANNED"] = "BANNED";
})(userStatus || (userStatus = {}));
export class userAcc extends Account {
    constructor(id, name, password, isLogin, role, status) {
        super(id, name, password, isLogin, role);
        this.status = status;
    }
    login() {
        if (this.status === userStatus.ACTIVE) {
            console.log("Login is success!!");
            this.isLogin = true;
        }
        else if (this.status === userStatus.BANNED) {
            console.log("Account is banned");
        }
    }
    getId() {
        return this.id;
    }
}
let account1 = new userAcc(1111, "DangToan", "123", false, "Admin", userStatus.ACTIVE);
let account2 = new userAcc(1112, "Duong", "111", false, "User", userStatus.BANNED);
// account1.login();
// account2.login();
// account1.logout();
