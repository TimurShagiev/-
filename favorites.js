document.addEventListener('DOMContentLoaded', function() {
    let favoriteBooks = JSON.parse(localStorage.getItem('favorites')) || [];
    const favoritesContainer = document.getElementById('favorites-container');

    function renderFavorites() {
        favoritesContainer.innerHTML = '';

        favoriteBooks.forEach(book => {
            const bookElement = document.createElement('div');
            bookElement.innerHTML = `
                <a href="books/book${book.id}.html">
                <div class="bookInstance">
                    <h3>${book.title}</h3>	
                    <p>Author: ${book.author}</p>
                    <p>Genre: ${book.genre}</p>
                    <p>length: ${book.length}</p>
                </div>
                </a>
                <button class="remove-btn" data-id="${book.id}">Remove from favourites</button>
            `;
            favoritesContainer.appendChild(bookElement);
        });
    }

    renderFavorites();

    favoritesContainer.addEventListener('click', function(event) {
        if (event.target.classList.contains('remove-btn')) {
            const bookIdToRemove = parseInt(event.target.getAttribute('data-id'));
            favoriteBooks = favoriteBooks.filter(book => book.id !== bookIdToRemove);
            localStorage.setItem('favorites', JSON.stringify(favoriteBooks));
            renderFavorites(); 
        }
    });
});
