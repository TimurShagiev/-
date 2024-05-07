document.addEventListener('DOMContentLoaded', function() {
    let cartBooks = JSON.parse(localStorage.getItem('cart')) || [];
    const cartContainer = document.getElementById('cart-container');

    function renderCart() {
        cartContainer.innerHTML = '';

        cartBooks.forEach(book => {
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
                <button class="remove-btn" data-id="${book.id}">Remove from cart</button>
            `;
            cartContainer.appendChild(bookElement);
        });
    }

    renderCart();

    cartContainer.addEventListener('click', function(event) {
        if (event.target.classList.contains('remove-btn')) {
            const bookIdToRemove = parseInt(event.target.getAttribute('data-id'));
            cartBooks = cartBooks.filter(book => book.id !== bookIdToRemove);
            localStorage.setItem('cart', JSON.stringify(cartBooks));
            renderCart(); 
        }
    });
});
