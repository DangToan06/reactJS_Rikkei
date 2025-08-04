class phoneBook {
  constructor(name, phone, email) {
    this.name = name;
    this.phone = phone;
    this.email = email;
  }
}

const phoneBooks = [];

const addContact = ({ name, phone, email }) => {
  const preson = { name, phone, email };
  phoneBooks.push(preson);
};

const displayContact = () => {
  phoneBooks.forEach((e) => {
    let { name, phone, email } = e;
    console.log(`
    --------------------
    Ho ten: ${name}
    SDT: ${phone}
    Email: ${email}
    --------------------`);
  });
};

addContact(new phoneBook("Nguyễn Văn A", "0901234567", "vana@example.com"));
addContact(new phoneBook("Trần Thị B", "0987654321", "tranb@example.com"));
addContact(new phoneBook("Lê Văn C", "0911111222", "levanc@example.com"));

displayContact();
