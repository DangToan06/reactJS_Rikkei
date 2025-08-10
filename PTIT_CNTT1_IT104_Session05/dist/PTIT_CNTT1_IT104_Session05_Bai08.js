"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Book {
    title;
    author;
    id;
    constructor(title, author, id) {
        this.title = title;
        this.author = author;
        this.id = id;
    }
    getTitle() {
        return this.title;
    }
    getAuthor() {
        return this.author;
    }
    getId() {
        return this.id;
    }
    setTitle(newTitle) {
        this.title = newTitle;
    }
    setAuthor(newAuthor) {
        this.author = newAuthor;
    }
}
class Library {
    books = [];
    addBookAtLibrary(newBook) {
        this.books.push(newBook);
    }
    searchBook(searchName) {
        const arrBooks = this.books.filter((book) => book.getTitle().includes(searchName));
        console.log(arrBooks);
    }
}
const book1 = new Book("book1", "author1", "001");
const book2 = new Book("book2", "author2", "002");
const book3 = new Book("book3", "author3", "003");
const book4 = new Book("book4", "author4", "004");
const book5 = new Book("book5", "author5", "005");
const library = new Library();
library.addBookAtLibrary(book1);
library.addBookAtLibrary(book2);
library.addBookAtLibrary(book3);
library.addBookAtLibrary(book4);
library.addBookAtLibrary(book5);
library.searchBook("book2");
