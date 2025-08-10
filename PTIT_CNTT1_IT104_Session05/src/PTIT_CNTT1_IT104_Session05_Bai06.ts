class Book {
  private title: string;
  private author: string;
  constructor(title: string, author: string) {
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
  private books: Book[] = [];

  addBookAtLibrary(newBook: Book) {
    this.books.push(newBook);
  }

  displayBookAtLibrary() {
    this.books.forEach((book) => {
      console.log(`Title: ${book.getTitle()} || Author: ${book.getAuthor()}`);
    });
  }
}

const book1: Book = new Book("book1", "author1");
const book2: Book = new Book("book2", "author2");
const book3: Book = new Book("book3", "author3");
const book4: Book = new Book("book4", "author4");
const book5: Book = new Book("book5", "author5");

const library = new Library();

library.addBookAtLibrary(book1);
library.addBookAtLibrary(book2);
library.addBookAtLibrary(book3);
library.addBookAtLibrary(book4);
library.addBookAtLibrary(book5);

library.displayBookAtLibrary();
