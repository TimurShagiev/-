const genreSelect = document.getElementById('genre');
const lengthSelect = document.getElementById('length');
const authorSelect = document.getElementById('author');
const booksContainer = document.getElementById('books');
const books = [
    { 
        id: 1,
        title: 'The Paris Novel',
        author: 'Ruth Reich',
        genre: 'Fiction',
        length: 'Medium',
        image: 'The Paris Novel.jpg' 
    },
    { 
        id: 2,
        title: 'The Godfather',
        author: 'Mario Puzo',
        genre: 'Novel',
        length: 'Long',
        image: 'The Godfather.jpg'
    },
    { 
        id: 3,
        title: 'A Million To One',
        author: 'Tony Faggioli',
        genre: 'Horror',
        length: 'Long',
        image: 'A Million To One.jpg'
    },
    { 
        id: 4,
        title: 'Alone',
        author: 'Morgan Maxwell',
        genre: 'Horror',
        length: 'Short',
        image: 'Alone.png'
    },
    { 
        id: 5,
        title: 'A Great Reckoning',
        author: 'Louise Penny',
        genre: 'Novel',
        length: 'Long',
        image: 'A Great Reckoning.jpg',
    },
    { 
        id: 6,
        title: 'The Wager: A Tale of Shipwreck',
        author: 'David Grann',
        genre: 'Non-Fiction',
        length: 'Medium',
        image: 'The Wager A Tale of Shipwreck.jpg',
    },
    { 
        id: 7,
        title: '1984',
        author: 'George Orwell',
        genre: 'Fiction',
        length: 'Long',
        image: '1984.jpg'
    },
];
books.forEach(book => {
    const bookElement = document.createElement('div');
    bookElement.classList.add('book');
    bookElement.innerHTML = `
        <a href="books/book${book.id}.html">
        <div class="bookInstance">
            <h3>${book.title}</h3>	
            <img src="images/${book.image}"></img>
            <p>Author: ${book.author}</p>
            <p>Genre: ${book.genre}</p>
            <p>length: ${book.length}</p>
        </div>
        </a>
    `;
    booksContainer.appendChild(bookElement);
});
genreSelect.addEventListener('change', filterBooks);
lengthSelect.addEventListener('change', filterBooks);
authorSelect.addEventListener('change', filterBooks);

function filterBooks() {
    const genre = genreSelect.value;
    const length = lengthSelect.value;
    const author = authorSelect.value;

    const filteredBooks = books.filter(book => {
        return (genre === 'All' || book.genre === genre) &&
               (length === 'All' || book.length === length) &&
               (author === 'All' || book.author === author);
    });

    displayBooks(filteredBooks);
}

function displayBooks(books) {
    booksContainer.innerHTML = '';

    books.forEach(book => {
        const bookElement = document.createElement('div');
        bookElement.classList.add('book');
        bookElement.innerHTML = `
            <a href="books/book${book.id}.html">
            <h3>${book.title}</h3>
            <p>Author: ${book.author}</p>
            <p>Genre: ${book.genre}</p>
            <p>length: ${book.length}</p>
            </a>
        `;
        booksContainer.appendChild(bookElement);
    });
}
