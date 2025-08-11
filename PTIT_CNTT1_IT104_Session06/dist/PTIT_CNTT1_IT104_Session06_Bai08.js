"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Book {
    id;
    title;
    author;
    stock;
    status;
    constructor(id, title, author, stock, status) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.stock = stock;
        this.status = status;
    }
}
class Member {
    id;
    name;
    contact;
    lendedBooks;
    status;
    constructor(id, name, contact, status) {
        this.id = id;
        this.name = name;
        this.contact = contact;
        this.lendedBooks = [];
        this.status = status;
    }
}
class LendedBook {
    memberId;
    bookId;
    dueDate;
    constructor(memberId, bookId, dueDate) {
        this.memberId = memberId;
        this.bookId = bookId;
        this.dueDate = dueDate;
    }
}
class Library {
    books;
    members;
    constructor() {
        this.books = [];
        this.members = [];
    }
    addBook(book) {
        this.books.push(book);
    }
    showBooks() {
        this.books.forEach((book) => {
            console.log(`ID: ${book.id}, Tiêu đề: ${book.title}, Tác giả: ${book.author}, Số lượng: ${book.stock}, Tình trạng: ${book.status}`);
        });
    }
}
const library = new Library();
const newBooks = [
    new Book(1, "Lập Trình JavaScript", "Nguyễn Văn A", 5, "Available"),
    new Book(2, "Cấu Trúc Dữ Liệu & Giải Thuật", "Trần Văn B", 3, "Available"),
    new Book(3, "Học TypeScript Từ Cơ Bản Đến Nâng Cao", "Lê Thị C", 0, "Out of Stock"),
];
newBooks.forEach((book) => {
    library.addBook(book);
});
library.showBooks();
