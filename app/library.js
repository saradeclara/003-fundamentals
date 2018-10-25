let books = [
    {
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
    }
];

function getAllBooks() {
    return books;
}

function checkoutBook(isbnNumber) {
    let matchingBooks = books.filter(function(book) {
        return book.isbn == isbnNumber;
    })

    if(matchingBooks != null && matchingBooks.length > 0 ) {
        matchingBooks[0].available = false;
    }
}

function getAllAvailableBooks() {
    return books.filter(function(book) {
        return book.available;
    });
}

module.exports = {
    getAllBooks,
    getAllAvailableBooks,
    checkoutBook
};