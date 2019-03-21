
// Library (class)
class Library {
  constructor(books) {
    this.books = books;
  }

  add(newBook) {
    this.books.push(newBook);
  }
}



module.exports = Library;
