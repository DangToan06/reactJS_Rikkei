import {
  Account,
  userStatus,
  userAcc,
} from "./PTIT_CNTT1_IT104_Session07_Bai05.js";

class AdminAcc extends Account {
  constructor(
    id: number,
    name: string,
    password: string,
    isLogin: boolean,
    role: string,
    public users: userAcc[]
  ) {
    super(id, name, password, isLogin, role);
  }

  banUser(id: number) {
    const userUpdate = this.users.find((user) => user.getId() === id);
    if (userUpdate) {
      userUpdate.status = userStatus.BANNED;
    } else {
      console.log(`Id isn't exist ${id}`);
    }
  }
}

const user1 = new userAcc(
  1001,
  "Toan",
  "123",
  false,
  "User",
  userStatus.ACTIVE
);
const user2 = new userAcc(1002, "Huy", "abc", false, "User", userStatus.ACTIVE);
const user3 = new userAcc(1003, "Lan", "xyz", false, "User", userStatus.ACTIVE);

const admin = new AdminAcc(9999, "AdminMaster", "admin123", true, "Admin", [
  user1,
  user2,
  user3,
]);

console.log("=== Trạng thái ban đầu ===");
console.log(admin.users);

admin.banUser(1002);
admin.banUser(2000);

console.log("=== Trạng thái sau khi ban ===");
console.log(admin.users);
