// Library (class)
class Library {
  constructor(books) {
    this.books = books;
  }

  add() {}
}

// Book (class)
class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.available = true;
    this.isbn = isbn;
  }
}

module.exports = Library, Book;
