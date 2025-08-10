"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Book {
    title;
    author;
    id;
    year;
    constructor(title, author, id, year) {
        this.title = title;
        this.author = author;
        this.id = id;
        this.year = year;
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
    setYear(newYear) {
        this.year = newYear;
    }
}
class Library {
    books = [];
    addBookAtLibrary(newBook) {
        this.books.push(newBook);
    }
    displayBookAtLibrary() {
        this.books.forEach((book) => {
            console.log(`Title: ${book.getTitle()} || Author: ${book.getAuthor()}`);
        });
    }
    updateBookById(id, newTitle, newAuthor, newYear) {
        let oldBook = this.books.find((book) => book.getId() === id);
        oldBook?.setAuthor(newAuthor);
        oldBook?.setTitle(newTitle);
        oldBook?.setYear(newYear);
    }
    deleteBookById(id) {
        const index = this.books.findIndex((book) => book.getId() == id);
        this.books.splice(index, 1);
    }
}
const book1 = new Book("book1", "author1", 1000, 1990);
const book2 = new Book("book2", "author2", 1001, 2000);
const book3 = new Book("book3", "author3", 1002, 2006);
const book4 = new Book("book4", "author4", 1003, 1978);
const book5 = new Book("book5", "author5", 1004, 2022);
const library = new Library();
library.addBookAtLibrary(book1);
library.addBookAtLibrary(book2);
library.addBookAtLibrary(book3);
library.addBookAtLibrary(book4);
library.addBookAtLibrary(book5);
library.updateBookById(1002, "newBook", "newAuthor", 2025);
library.deleteBookById(1003);
library.displayBookAtLibrary();
