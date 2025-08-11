class Book {
  id: number;
  title: string;
  author: string;
  stock: number;
  status: string;
  constructor(
    id: number,
    title: string,
    author: string,
    stock: number,
    status: string
  ) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.stock = stock;
    this.status = status;
  }
}
class Member {
  id: number;
  name: string;
  contact: string;
  lendedBooks: LendedBook[];
  status: string;
  constructor(id: number, name: string, contact: string, status: string) {
    this.id = id;
    this.name = name;
    this.contact = contact;
    this.lendedBooks = [];
    this.status = status;
  }
}
class LendedBook {
  memberId: number;
  bookId: number;
  dueDate: Date;

  constructor(memberId: number, bookId: number, dueDate: Date) {
    this.memberId = memberId;
    this.bookId = bookId;
    this.dueDate = dueDate;
  }
}
class Library {
  books: Book[];
  members: Member[];
  constructor() {
    this.books = [];
    this.members = [];
  }
  addBook(book: Book): void {
    this.books.push(book);
  }
  showBooks(): void {
    this.books.forEach((book) => {
      console.log(
        `ID: ${book.id}, Tiêu đề: ${book.title}, Tác giả: ${book.author}, Số lượng: ${book.stock}, Tình trạng: ${book.status}`
      );
    });
  }
}
const library = new Library();
const newBooks: Book[] = [
  new Book(1, "Lập Trình JavaScript", "Nguyễn Văn A", 5, "Available"),
  new Book(2, "Cấu Trúc Dữ Liệu & Giải Thuật", "Trần Văn B", 3, "Available"),
  new Book(
    3,
    "Học TypeScript Từ Cơ Bản Đến Nâng Cao",
    "Lê Thị C",
    0,
    "Out of Stock"
  ),
];
newBooks.forEach((book) => {
  library.addBook(book);
});
library.showBooks();
