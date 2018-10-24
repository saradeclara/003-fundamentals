const books = [
    {
        title: "Don't Make Me Think",
        author: "Steve Krug",
        available: true
    },
    {
        title: "Site Reliability Engineering",
        author: "Niall Richard Murphy",
        available: true
    },
    {
        title: "Fantastic Mr Fox",
        author: "Roald Dahl",
        available: true
    }
];

function getAllBooks() {
    
    return books;
}

function getAllAvailableBooks() {
}

module.exports = {
    getAllBooks,
    getAllAvailableBooks
};