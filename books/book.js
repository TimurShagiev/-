const descriptionContainer = document.getElementById('description');
const books = [
    { 
        id: 1,
        title: 'The Paris Novel',
        author: 'Ruth Reich',
        genre: 'Fiction',
        length: 'Medium',
        image: 'The Paris Novel.jpg',
        content: [
            'THIS IS PAGE 1.This is story about The Paris Novel.',
            'THIS IS PAGE 2.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eleifend quis quam at accumsan. In varius a massa sit amet posuere. Donec sed dolor ut eros iaculis maximus vestibulum ut purus. Curabitur non dolor ut ante finibus congue. Phasellus interdum, sem nec condimentum convallis, nulla purus rutrum sem, vitae convallis diam diam eget libero. Nam dapibus auctor libero, convallis tincidunt purus interdum vitae. Praesent tempus, massa ut viverra volutpat, felis metus dignissim felis, a condimentum ipsum velit vel ex. Donec tristique, lectus eget rutrum tempus, massa ex faucibus augue, eu ultricies orci nunc eget felis. Quisque laoreet leo eget nunc laoreet, in tristique sapien scelerisque.',
            'THIS IS PAGE 3.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eleifend quis quam at accumsan. In varius a massa sit amet posuere. Donec sed dolor ut eros iaculis maximus vestibulum ut purus. Curabitur non dolor ut ante finibus congue. Phasellus interdum, sem nec condimentum convallis, nulla purus rutrum sem, vitae convallis diam diam eget libero. Nam dapibus auctor libero, convallis tincidunt purus interdum vitae. Praesent tempus, massa ut viverra volutpat, felis metus dignissim felis, a condimentum ipsum velit vel ex. Donec tristique, lectus eget rutrum tempus, massa ex faucibus augue, eu ultricies orci nunc eget felis. Quisque laoreet leo eget nunc laoreet, in tristique sapien scelerisque.',
            'THIS IS PAGE 4.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eleifend quis quam at accumsan. In varius a massa sit amet posuere. Donec sed dolor ut eros iaculis maximus vestibulum ut purus. Curabitur non dolor ut ante finibus congue. Phasellus interdum, sem nec condimentum convallis, nulla purus rutrum sem, vitae convallis diam diam eget libero. Nam dapibus auctor libero, convallis tincidunt purus interdum vitae. Praesent tempus, massa ut viverra volutpat, felis metus dignissim felis, a condimentum ipsum velit vel ex. Donec tristique, lectus eget rutrum tempus, massa ex faucibus augue, eu ultricies orci nunc eget felis. Quisque laoreet leo eget nunc laoreet, in tristique sapien scelerisque.',
            'THIS IS PAGE 5.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eleifend quis quam at accumsan. In varius a massa sit amet posuere. Donec sed dolor ut eros iaculis maximus vestibulum ut purus. Curabitur non dolor ut ante finibus congue. Phasellus interdum, sem nec condimentum convallis, nulla purus rutrum sem, vitae convallis diam diam eget libero. Nam dapibus auctor libero, convallis tincidunt purus interdum vitae. Praesent tempus, massa ut viverra volutpat, felis metus dignissim felis, a condimentum ipsum velit vel ex. Donec tristique, lectus eget rutrum tempus, massa ex faucibus augue, eu ultricies orci nunc eget felis. Quisque laoreet leo eget nunc laoreet, in tristique sapien scelerisque.',
            'THIS IS PAGE 6. Read full book by buying it in our store!',

        ]
    },
    { 
        id: 2,
        title: 'The Godfather',
        author: 'Mario Puzo',
        genre: 'Novel',
        length: 'Long',
        image: 'The Godfather.jpg',
        content: [
            'THIS IS PAGE 1.This is story about The Godfather.',
            'THIS IS PAGE 2.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eleifend quis quam at accumsan. In varius a massa sit amet posuere. Donec sed dolor ut eros iaculis maximus vestibulum ut purus. Curabitur non dolor ut ante finibus congue. Phasellus interdum, sem nec condimentum convallis, nulla purus rutrum sem, vitae convallis diam diam eget libero. Nam dapibus auctor libero, convallis tincidunt purus interdum vitae. Praesent tempus, massa ut viverra volutpat, felis metus dignissim felis, a condimentum ipsum velit vel ex. Donec tristique, lectus eget rutrum tempus, massa ex faucibus augue, eu ultricies orci nunc eget felis. Quisque laoreet leo eget nunc laoreet, in tristique sapien scelerisque.',
            'THIS IS PAGE 3.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eleifend quis quam at accumsan. In varius a massa sit amet posuere. Donec sed dolor ut eros iaculis maximus vestibulum ut purus. Curabitur non dolor ut ante finibus congue. Phasellus interdum, sem nec condimentum convallis, nulla purus rutrum sem, vitae convallis diam diam eget libero. Nam dapibus auctor libero, convallis tincidunt purus interdum vitae. Praesent tempus, massa ut viverra volutpat, felis metus dignissim felis, a condimentum ipsum velit vel ex. Donec tristique, lectus eget rutrum tempus, massa ex faucibus augue, eu ultricies orci nunc eget felis. Quisque laoreet leo eget nunc laoreet, in tristique sapien scelerisque.',
            'THIS IS PAGE 4.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eleifend quis quam at accumsan. In varius a massa sit amet posuere. Donec sed dolor ut eros iaculis maximus vestibulum ut purus. Curabitur non dolor ut ante finibus congue. Phasellus interdum, sem nec condimentum convallis, nulla purus rutrum sem, vitae convallis diam diam eget libero. Nam dapibus auctor libero, convallis tincidunt purus interdum vitae. Praesent tempus, massa ut viverra volutpat, felis metus dignissim felis, a condimentum ipsum velit vel ex. Donec tristique, lectus eget rutrum tempus, massa ex faucibus augue, eu ultricies orci nunc eget felis. Quisque laoreet leo eget nunc laoreet, in tristique sapien scelerisque.',
            'THIS IS PAGE 5.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eleifend quis quam at accumsan. In varius a massa sit amet posuere. Donec sed dolor ut eros iaculis maximus vestibulum ut purus. Curabitur non dolor ut ante finibus congue. Phasellus interdum, sem nec condimentum convallis, nulla purus rutrum sem, vitae convallis diam diam eget libero. Nam dapibus auctor libero, convallis tincidunt purus interdum vitae. Praesent tempus, massa ut viverra volutpat, felis metus dignissim felis, a condimentum ipsum velit vel ex. Donec tristique, lectus eget rutrum tempus, massa ex faucibus augue, eu ultricies orci nunc eget felis. Quisque laoreet leo eget nunc laoreet, in tristique sapien scelerisque.',
            'THIS IS PAGE 6. Read full book by buying it in our store!',

        ]
    },
    { 
        id: 3,
        title: 'A Million To One',
        author: 'Tony Faggioli',
        genre: 'Horror',
        length: 'Long',
        image: 'A Million To One.jpg',
        content: [
            'THIS IS PAGE 1.This is story about A Million To One.',
            'THIS IS PAGE 2.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eleifend quis quam at accumsan. In varius a massa sit amet posuere. Donec sed dolor ut eros iaculis maximus vestibulum ut purus. Curabitur non dolor ut ante finibus congue. Phasellus interdum, sem nec condimentum convallis, nulla purus rutrum sem, vitae convallis diam diam eget libero. Nam dapibus auctor libero, convallis tincidunt purus interdum vitae. Praesent tempus, massa ut viverra volutpat, felis metus dignissim felis, a condimentum ipsum velit vel ex. Donec tristique, lectus eget rutrum tempus, massa ex faucibus augue, eu ultricies orci nunc eget felis. Quisque laoreet leo eget nunc laoreet, in tristique sapien scelerisque.',
            'THIS IS PAGE 3.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eleifend quis quam at accumsan. In varius a massa sit amet posuere. Donec sed dolor ut eros iaculis maximus vestibulum ut purus. Curabitur non dolor ut ante finibus congue. Phasellus interdum, sem nec condimentum convallis, nulla purus rutrum sem, vitae convallis diam diam eget libero. Nam dapibus auctor libero, convallis tincidunt purus interdum vitae. Praesent tempus, massa ut viverra volutpat, felis metus dignissim felis, a condimentum ipsum velit vel ex. Donec tristique, lectus eget rutrum tempus, massa ex faucibus augue, eu ultricies orci nunc eget felis. Quisque laoreet leo eget nunc laoreet, in tristique sapien scelerisque.',
            'THIS IS PAGE 4.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eleifend quis quam at accumsan. In varius a massa sit amet posuere. Donec sed dolor ut eros iaculis maximus vestibulum ut purus. Curabitur non dolor ut ante finibus congue. Phasellus interdum, sem nec condimentum convallis, nulla purus rutrum sem, vitae convallis diam diam eget libero. Nam dapibus auctor libero, convallis tincidunt purus interdum vitae. Praesent tempus, massa ut viverra volutpat, felis metus dignissim felis, a condimentum ipsum velit vel ex. Donec tristique, lectus eget rutrum tempus, massa ex faucibus augue, eu ultricies orci nunc eget felis. Quisque laoreet leo eget nunc laoreet, in tristique sapien scelerisque.',
            'THIS IS PAGE 5.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eleifend quis quam at accumsan. In varius a massa sit amet posuere. Donec sed dolor ut eros iaculis maximus vestibulum ut purus. Curabitur non dolor ut ante finibus congue. Phasellus interdum, sem nec condimentum convallis, nulla purus rutrum sem, vitae convallis diam diam eget libero. Nam dapibus auctor libero, convallis tincidunt purus interdum vitae. Praesent tempus, massa ut viverra volutpat, felis metus dignissim felis, a condimentum ipsum velit vel ex. Donec tristique, lectus eget rutrum tempus, massa ex faucibus augue, eu ultricies orci nunc eget felis. Quisque laoreet leo eget nunc laoreet, in tristique sapien scelerisque.',
            'THIS IS PAGE 6. Read full book by buying it in our store!',

        ]
    },
    { 
        id: 4,
        title: 'Alone',
        author: 'Morgan Maxwell',
        genre: 'Horror',
        length: 'Medium',
        image: 'Alone.png',
        content: [
            'THIS IS PAGE 1.This is story about Alone.',
            'THIS IS PAGE 2.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eleifend quis quam at accumsan. In varius a massa sit amet posuere. Donec sed dolor ut eros iaculis maximus vestibulum ut purus. Curabitur non dolor ut ante finibus congue. Phasellus interdum, sem nec condimentum convallis, nulla purus rutrum sem, vitae convallis diam diam eget libero. Nam dapibus auctor libero, convallis tincidunt purus interdum vitae. Praesent tempus, massa ut viverra volutpat, felis metus dignissim felis, a condimentum ipsum velit vel ex. Donec tristique, lectus eget rutrum tempus, massa ex faucibus augue, eu ultricies orci nunc eget felis. Quisque laoreet leo eget nunc laoreet, in tristique sapien scelerisque.',
            'THIS IS PAGE 3.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eleifend quis quam at accumsan. In varius a massa sit amet posuere. Donec sed dolor ut eros iaculis maximus vestibulum ut purus. Curabitur non dolor ut ante finibus congue. Phasellus interdum, sem nec condimentum convallis, nulla purus rutrum sem, vitae convallis diam diam eget libero. Nam dapibus auctor libero, convallis tincidunt purus interdum vitae. Praesent tempus, massa ut viverra volutpat, felis metus dignissim felis, a condimentum ipsum velit vel ex. Donec tristique, lectus eget rutrum tempus, massa ex faucibus augue, eu ultricies orci nunc eget felis. Quisque laoreet leo eget nunc laoreet, in tristique sapien scelerisque.',
            'THIS IS PAGE 4.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eleifend quis quam at accumsan. In varius a massa sit amet posuere. Donec sed dolor ut eros iaculis maximus vestibulum ut purus. Curabitur non dolor ut ante finibus congue. Phasellus interdum, sem nec condimentum convallis, nulla purus rutrum sem, vitae convallis diam diam eget libero. Nam dapibus auctor libero, convallis tincidunt purus interdum vitae. Praesent tempus, massa ut viverra volutpat, felis metus dignissim felis, a condimentum ipsum velit vel ex. Donec tristique, lectus eget rutrum tempus, massa ex faucibus augue, eu ultricies orci nunc eget felis. Quisque laoreet leo eget nunc laoreet, in tristique sapien scelerisque.',
            'THIS IS PAGE 5.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eleifend quis quam at accumsan. In varius a massa sit amet posuere. Donec sed dolor ut eros iaculis maximus vestibulum ut purus. Curabitur non dolor ut ante finibus congue. Phasellus interdum, sem nec condimentum convallis, nulla purus rutrum sem, vitae convallis diam diam eget libero. Nam dapibus auctor libero, convallis tincidunt purus interdum vitae. Praesent tempus, massa ut viverra volutpat, felis metus dignissim felis, a condimentum ipsum velit vel ex. Donec tristique, lectus eget rutrum tempus, massa ex faucibus augue, eu ultricies orci nunc eget felis. Quisque laoreet leo eget nunc laoreet, in tristique sapien scelerisque.',
            'THIS IS PAGE 6. Read full book by buying it in our store!',

        ]
    },
    { 
        id: 5,
        title: 'A Great Reckoning',
        author: 'Louise Penny',
        genre: 'Novel',
        length: 'Long',
        image: 'A Great Reckoning.jpg',
        content: [
            'THIS IS PAGE 1.This is story about A Great Reckoning.',
            'THIS IS PAGE 2.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eleifend quis quam at accumsan. In varius a massa sit amet posuere. Donec sed dolor ut eros iaculis maximus vestibulum ut purus. Curabitur non dolor ut ante finibus congue. Phasellus interdum, sem nec condimentum convallis, nulla purus rutrum sem, vitae convallis diam diam eget libero. Nam dapibus auctor libero, convallis tincidunt purus interdum vitae. Praesent tempus, massa ut viverra volutpat, felis metus dignissim felis, a condimentum ipsum velit vel ex. Donec tristique, lectus eget rutrum tempus, massa ex faucibus augue, eu ultricies orci nunc eget felis. Quisque laoreet leo eget nunc laoreet, in tristique sapien scelerisque.',
            'THIS IS PAGE 3.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eleifend quis quam at accumsan. In varius a massa sit amet posuere. Donec sed dolor ut eros iaculis maximus vestibulum ut purus. Curabitur non dolor ut ante finibus congue. Phasellus interdum, sem nec condimentum convallis, nulla purus rutrum sem, vitae convallis diam diam eget libero. Nam dapibus auctor libero, convallis tincidunt purus interdum vitae. Praesent tempus, massa ut viverra volutpat, felis metus dignissim felis, a condimentum ipsum velit vel ex. Donec tristique, lectus eget rutrum tempus, massa ex faucibus augue, eu ultricies orci nunc eget felis. Quisque laoreet leo eget nunc laoreet, in tristique sapien scelerisque.',
            'THIS IS PAGE 4.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eleifend quis quam at accumsan. In varius a massa sit amet posuere. Donec sed dolor ut eros iaculis maximus vestibulum ut purus. Curabitur non dolor ut ante finibus congue. Phasellus interdum, sem nec condimentum convallis, nulla purus rutrum sem, vitae convallis diam diam eget libero. Nam dapibus auctor libero, convallis tincidunt purus interdum vitae. Praesent tempus, massa ut viverra volutpat, felis metus dignissim felis, a condimentum ipsum velit vel ex. Donec tristique, lectus eget rutrum tempus, massa ex faucibus augue, eu ultricies orci nunc eget felis. Quisque laoreet leo eget nunc laoreet, in tristique sapien scelerisque.',
            'THIS IS PAGE 5.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eleifend quis quam at accumsan. In varius a massa sit amet posuere. Donec sed dolor ut eros iaculis maximus vestibulum ut purus. Curabitur non dolor ut ante finibus congue. Phasellus interdum, sem nec condimentum convallis, nulla purus rutrum sem, vitae convallis diam diam eget libero. Nam dapibus auctor libero, convallis tincidunt purus interdum vitae. Praesent tempus, massa ut viverra volutpat, felis metus dignissim felis, a condimentum ipsum velit vel ex. Donec tristique, lectus eget rutrum tempus, massa ex faucibus augue, eu ultricies orci nunc eget felis. Quisque laoreet leo eget nunc laoreet, in tristique sapien scelerisque.',
            'THIS IS PAGE 6. Read full book by buying it in our store!',

        ]
    },
    { 
        id: 6,
        title: 'The Wager: A Tale of Shipwreck',
        author: 'David Grann',
        genre: 'Non-Fiction',
        length: 'Medium',
        image: 'The Wager A Tale of Shipwreck.jpg',
        content: [
            'THIS IS PAGE 1.This is story about The Wager: A Tale of Shipwreck.',
            'THIS IS PAGE 2.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eleifend quis quam at accumsan. In varius a massa sit amet posuere. Donec sed dolor ut eros iaculis maximus vestibulum ut purus. Curabitur non dolor ut ante finibus congue. Phasellus interdum, sem nec condimentum convallis, nulla purus rutrum sem, vitae convallis diam diam eget libero. Nam dapibus auctor libero, convallis tincidunt purus interdum vitae. Praesent tempus, massa ut viverra volutpat, felis metus dignissim felis, a condimentum ipsum velit vel ex. Donec tristique, lectus eget rutrum tempus, massa ex faucibus augue, eu ultricies orci nunc eget felis. Quisque laoreet leo eget nunc laoreet, in tristique sapien scelerisque.',
            'THIS IS PAGE 3.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eleifend quis quam at accumsan. In varius a massa sit amet posuere. Donec sed dolor ut eros iaculis maximus vestibulum ut purus. Curabitur non dolor ut ante finibus congue. Phasellus interdum, sem nec condimentum convallis, nulla purus rutrum sem, vitae convallis diam diam eget libero. Nam dapibus auctor libero, convallis tincidunt purus interdum vitae. Praesent tempus, massa ut viverra volutpat, felis metus dignissim felis, a condimentum ipsum velit vel ex. Donec tristique, lectus eget rutrum tempus, massa ex faucibus augue, eu ultricies orci nunc eget felis. Quisque laoreet leo eget nunc laoreet, in tristique sapien scelerisque.',
            'THIS IS PAGE 4.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eleifend quis quam at accumsan. In varius a massa sit amet posuere. Donec sed dolor ut eros iaculis maximus vestibulum ut purus. Curabitur non dolor ut ante finibus congue. Phasellus interdum, sem nec condimentum convallis, nulla purus rutrum sem, vitae convallis diam diam eget libero. Nam dapibus auctor libero, convallis tincidunt purus interdum vitae. Praesent tempus, massa ut viverra volutpat, felis metus dignissim felis, a condimentum ipsum velit vel ex. Donec tristique, lectus eget rutrum tempus, massa ex faucibus augue, eu ultricies orci nunc eget felis. Quisque laoreet leo eget nunc laoreet, in tristique sapien scelerisque.',
            'THIS IS PAGE 5.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eleifend quis quam at accumsan. In varius a massa sit amet posuere. Donec sed dolor ut eros iaculis maximus vestibulum ut purus. Curabitur non dolor ut ante finibus congue. Phasellus interdum, sem nec condimentum convallis, nulla purus rutrum sem, vitae convallis diam diam eget libero. Nam dapibus auctor libero, convallis tincidunt purus interdum vitae. Praesent tempus, massa ut viverra volutpat, felis metus dignissim felis, a condimentum ipsum velit vel ex. Donec tristique, lectus eget rutrum tempus, massa ex faucibus augue, eu ultricies orci nunc eget felis. Quisque laoreet leo eget nunc laoreet, in tristique sapien scelerisque.',
            'THIS IS PAGE 6. Read full book by buying it in our store!',

        ]
    },
    { 
        id: 7,
        title: '1984',
        author: 'George Orwell',
        genre: 'Fiction',
        length: 'MEdiu',
        image: '1984.jpg',
        content: [
            'THIS IS PAGE 1.This is story about The Wager: A Tale of Shipwreck.',
            'THIS IS PAGE 2.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eleifend quis quam at accumsan. In varius a massa sit amet posuere. Donec sed dolor ut eros iaculis maximus vestibulum ut purus. Curabitur non dolor ut ante finibus congue. Phasellus interdum, sem nec condimentum convallis, nulla purus rutrum sem, vitae convallis diam diam eget libero. Nam dapibus auctor libero, convallis tincidunt purus interdum vitae. Praesent tempus, massa ut viverra volutpat, felis metus dignissim felis, a condimentum ipsum velit vel ex. Donec tristique, lectus eget rutrum tempus, massa ex faucibus augue, eu ultricies orci nunc eget felis. Quisque laoreet leo eget nunc laoreet, in tristique sapien scelerisque.',
            'THIS IS PAGE 3.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eleifend quis quam at accumsan. In varius a massa sit amet posuere. Donec sed dolor ut eros iaculis maximus vestibulum ut purus. Curabitur non dolor ut ante finibus congue. Phasellus interdum, sem nec condimentum convallis, nulla purus rutrum sem, vitae convallis diam diam eget libero. Nam dapibus auctor libero, convallis tincidunt purus interdum vitae. Praesent tempus, massa ut viverra volutpat, felis metus dignissim felis, a condimentum ipsum velit vel ex. Donec tristique, lectus eget rutrum tempus, massa ex faucibus augue, eu ultricies orci nunc eget felis. Quisque laoreet leo eget nunc laoreet, in tristique sapien scelerisque.',
            'THIS IS PAGE 4.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eleifend quis quam at accumsan. In varius a massa sit amet posuere. Donec sed dolor ut eros iaculis maximus vestibulum ut purus. Curabitur non dolor ut ante finibus congue. Phasellus interdum, sem nec condimentum convallis, nulla purus rutrum sem, vitae convallis diam diam eget libero. Nam dapibus auctor libero, convallis tincidunt purus interdum vitae. Praesent tempus, massa ut viverra volutpat, felis metus dignissim felis, a condimentum ipsum velit vel ex. Donec tristique, lectus eget rutrum tempus, massa ex faucibus augue, eu ultricies orci nunc eget felis. Quisque laoreet leo eget nunc laoreet, in tristique sapien scelerisque.',
            'THIS IS PAGE 5.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eleifend quis quam at accumsan. In varius a massa sit amet posuere. Donec sed dolor ut eros iaculis maximus vestibulum ut purus. Curabitur non dolor ut ante finibus congue. Phasellus interdum, sem nec condimentum convallis, nulla purus rutrum sem, vitae convallis diam diam eget libero. Nam dapibus auctor libero, convallis tincidunt purus interdum vitae. Praesent tempus, massa ut viverra volutpat, felis metus dignissim felis, a condimentum ipsum velit vel ex. Donec tristique, lectus eget rutrum tempus, massa ex faucibus augue, eu ultricies orci nunc eget felis. Quisque laoreet leo eget nunc laoreet, in tristique sapien scelerisque.',
            'THIS IS PAGE 6. Read full book by buying it in our store!',

        ]
    },
];

let currentPageIndex = 0;

let readBtn = document.getElementById('readBtn');
let BookId = document.querySelector('.bookdesc').id;
const bookViewer = document.getElementById('bookViewer');
const bookContent = document.getElementById('bookContent');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const closeBtn = document.getElementById('closeBtn');
const addToFavoritesBtn = document.getElementById('addToFavorites');
const addToCartBtn = document.getElementById('addToCart');


addToFavoritesBtn.addEventListener('click', addFavorite);
addToCartBtn.addEventListener('click', addCart);

function displayCurrentPage(page) {
    bookContent.textContent = books[BookId - 1].content[currentPageIndex];
}


readBtn.addEventListener('click', function() {
    bookViewer.classList.remove('hidden');
    displayCurrentPage(0);
});

closeBtn.addEventListener('click', function() {
    bookViewer.classList.add('hidden');
});

prevBtn.addEventListener('click', function() {
    if (currentPageIndex > 0) {
        currentPageIndex--;
        displayCurrentPage(currentPageIndex); 
    }
});

nextBtn.addEventListener('click', function() {
    if (currentPageIndex < books[BookId - 1].content.length - 1) {
        currentPageIndex++; 
        displayCurrentPage(currentPageIndex); 
    }
});


function addFavorite() {
    alert(BookId)
    const book = books.find(book => book.id == BookId);

    if (book) {
        let favoriteBooks = JSON.parse(localStorage.getItem('favorites')) || [];
        if (!favoriteBooks.some(favBook => favBook.id === book.id)) {
            favoriteBooks.push(book); 
            localStorage.setItem('favorites', JSON.stringify(favoriteBooks)); 
            alert('Book added to favorites!');
        } else {
            alert('Book is already in favorites!');
        }
    } else {
        alert('Book not found!');
    }
}

function addCart() {
    const book = books.find(book => book.id == BookId);

    if (book) {
        let cartBooks = JSON.parse(localStorage.getItem('cart')) || [];
        if (!cartBooks.some(cBook => cBook.id === book.id)) {
            cartBooks.push(book);
            localStorage.setItem('cart', JSON.stringify(cartBooks)); 
            alert('Book added to cart!');
        } else {
            alert('Book is already in cart!');
        }
    } else {
        alert('Book not found!');
    }
}