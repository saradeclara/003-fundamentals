// Book (class)
class Book {
    constructor(title, author, isbn) {
      this.title = title;
      this.author = author;
      this.available = true;
      this.isbn = isbn;
    }
  }

module.exports = Book;