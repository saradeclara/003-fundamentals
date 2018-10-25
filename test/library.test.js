const library = require('../app/library');

test('Check we have all books and stocked correctly', () => {
  const expectedBooksInLibrary = [{
    title: "Don't Make Me Think",
    author: "Steve Krug",
    available: true,
    isbn: 123
  },
  {
    title: "Site Reliability Engineering",
    author: "Niall Richard Murphy",
    available: true,
    isbn: 456
  },
  {
    title: "Fantastic Mr Fox",
    author: "Roald Dahl",
    available: true,
    isbn: 789
  }];

  expect(library.getAllBooks()).toEqual(expectedBooksInLibrary);
});

test('Checkout a book', () => {
  let expectedBooksInLibrary = [{
    title: "Don't Make Me Think",
    author: "Steve Krug",
    available: true,
    isbn: 123
  },
  {
    title: "Site Reliability Engineering",
    author: "Niall Richard Murphy",
    available: true,
    isbn: 456
  },
  {
    title: "Fantastic Mr Fox",
    author: "Roald Dahl",
    available: true,
    isbn: 789
  }];

  // Assert that all books are available
  expect(library.getAllBooks()).toEqual(expectedBooksInLibrary);

  // Then checkout a book so we change the status of our test data
  expectedBooksInLibrary[1].available = false;

  // And then we checkout the book and check that our test data matches what we expect
  library.checkoutBook(456);
  expect(library.getAllBooks()).toEqual(expectedBooksInLibrary);
});

test('Check available books', () => {
  let availableBooksInLibrary = [{
    title: "Don't Make Me Think",
    author: "Steve Krug",
    available: true,
    isbn: 123
  },
  {
    title: "Fantastic Mr Fox",
    author: "Roald Dahl",
    available: true,
    isbn: 789
  }];

  expect(library.getAllAvailableBooks()).toEqual(availableBooksInLibrary);
});
