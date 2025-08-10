class Book {
  private title: string;
  private author: string;
  private id: number;
  private year: number;
  constructor(title: string, author: string, id: number, year: number) {
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

  setTitle(newTitle: string) {
    this.title = newTitle;
  }

  setAuthor(newAuthor: string) {
    this.author = newAuthor;
  }

  setYear(newYear: number) {
    this.year = newYear;
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

  updateBookById(
    id: number,
    newTitle: string,
    newAuthor: string,
    newYear: number
  ) {
    let oldBook = this.books.find((book: Book) => book.getId() === id);

    oldBook?.setAuthor(newAuthor);
    oldBook?.setTitle(newTitle);
    oldBook?.setYear(newYear);
  }

  deleteBookById(id: number) {
    const index: number = this.books.findIndex(
      (book: Book) => book.getId() == id
    );
    this.books.splice(index, 1);
  }
}

const book1: Book = new Book("book1", "author1", 1000, 1990);
const book2: Book = new Book("book2", "author2", 1001, 2000);
const book3: Book = new Book("book3", "author3", 1002, 2006);
const book4: Book = new Book("book4", "author4", 1003, 1978);
const book5: Book = new Book("book5", "author5", 1004, 2022);

const library = new Library();

library.addBookAtLibrary(book1);
library.addBookAtLibrary(book2);
library.addBookAtLibrary(book3);
library.addBookAtLibrary(book4);
library.addBookAtLibrary(book5);

library.updateBookById(1002, "newBook", "newAuthor", 2025);

library.deleteBookById(1003);

library.displayBookAtLibrary();
