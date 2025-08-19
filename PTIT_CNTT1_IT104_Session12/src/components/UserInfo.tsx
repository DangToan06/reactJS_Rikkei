export const UserInfo = () => {
  class User {
    public name: string;
    public sex: string;
    public dob: string;
    public email: string;
    public address: string;
    constructor(
      name: string,
      sex: string,
      dob: string,
      email: string,
      address: string
    ) {
      this.name = name;
      this.sex = sex;
      this.dob = dob;
      this.email = email;
      this.address = address;
    }
  }

  const user1 = new User(
    "Nguyen Van A",
    "Nam",
    "06/03/2024",
    "nva@gmail.com",
    "Thanh Xuan, HN"
  );

  return (
    <>
      <h1>Thong tin ca nhan</h1>
      <ul>
        <li>Ho va Ten: {user1.name}</li>
        <li>Gioi tinh: {user1.sex}</li>
        <li>Ngay sinh: {user1.dob}</li>
        <li>Email: {user1.email}</li>
        <li>Dia chi: {user1.address}</li>
      </ul>
    </>
  );
};
