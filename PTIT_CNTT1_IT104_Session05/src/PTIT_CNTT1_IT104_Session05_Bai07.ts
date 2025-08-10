class Book {
  private title: string;
  private author: string;
  private id: string;
  constructor(title: string, author: string, id: string) {
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

  setTitle(newTitle: string) {
    this.title = newTitle;
  }

  setAuthor(newAuthor: string) {
    this.author = newAuthor;
  }
}

class Library {
  private books: Book[] = [];

  addBookAtLibrary(newBook: Book) {
    this.books.push(newBook);
  }

  displayBookAtLibrary() {
    this.books.forEach((book) => {
      console.log(`Title: ${book.getTitle()} || Author: ${book.getAuthor()}`);
    });
  }

  setInfoBookbyId(id: string, newTitle: string, newAuthor: string) {
    let oldBook = this.books.find((book: Book) => book.getId() === id);

    oldBook?.setAuthor(newAuthor);
    oldBook?.setTitle(newTitle);
  }
}

const book1: Book = new Book("book1", "author1", "001");
const book2: Book = new Book("book2", "author2", "002");
const book3: Book = new Book("book3", "author3", "003");
const book4: Book = new Book("book4", "author4", "004");
const book5: Book = new Book("book5", "author5", "005");

const library = new Library();

library.addBookAtLibrary(book1);
library.addBookAtLibrary(book2);
library.addBookAtLibrary(book3);
library.addBookAtLibrary(book4);
library.addBookAtLibrary(book5);

library.setInfoBookbyId("003", "newBook", "newAuthor");

library.displayBookAtLibrary();
