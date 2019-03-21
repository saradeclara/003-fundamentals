const Library = require("../app/library");
const Book = require("../app/book");

const book1 = new Book('Don\'t Make Me Think', 'Steve Krug', 123);
const book2 = new Book('Site Reliability Engineering', 'Niall Richard Murphy', 456);
const book3 = new Book('Fantastic Mr Fox', 'Roald Dahl', 789);

test("Check that a library can be instantiated with some books", () => {
  const library = new Library([
    book1, book2, book3
  ]);
  expect(library.books).toEqual([
    book1, book2, book3
  ]);
});

test("Check that a book can be added to the library", () => {
  const library = new Library([]);
  library.add();
  expect(library.books).toEqual([]);
});
