"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Book {
    title;
    author;
    constructor(title, author) {
        this.title = title;
        this.author = author;
    }
    getTitle() {
        return this.title;
    }
    getAuthor() {
        return this.author;
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
}
const book1 = new Book("book1", "author1");
const book2 = new Book("book2", "author2");
const book3 = new Book("book3", "author3");
const book4 = new Book("book4", "author4");
const book5 = new Book("book5", "author5");
const library = new Library();
library.addBookAtLibrary(book1);
library.addBookAtLibrary(book2);
library.addBookAtLibrary(book3);
library.addBookAtLibrary(book4);
library.addBookAtLibrary(book5);
library.displayBookAtLibrary();
