document.querySelectorAll('.category-btn').forEach(button => {
    button.addEventListener('click', function () {
        const category = this.textContent.toLowerCase();
        const categoryNewsCards = document.querySelectorAll('.news-categories .news-card');

        document.querySelector('.category-btn--active').classList.remove('category-btn--active');
        this.classList.add('category-btn--active');

        if (category === 'search') {
            document.querySelector('.header__search-bar').style.display = 'flex';
            categoryNewsCards.forEach(card => {
                card.style.display = 'none';
            });
        } else {
            document.querySelector('.header__search-bar').style.display = 'none';
            categoryNewsCards.forEach(card => {
                if (category === 'all') {
                    card.style.display = 'block';
                } else {
                    const title = card.querySelector('.news-card__title').textContent.toLowerCase();
                    if (title.includes(category)) {
                        card.style.display = 'block';
                    } else {
                        card.style.display = 'none';
                    }
                }
            });
        }
    });
});

// Search Functionality
document.getElementById('search-button').addEventListener('click', function () {
    const query = document.getElementById('search-input').value.toLowerCase();
    const categoryNewsCards = document.querySelectorAll('.news-categories .news-card');
    let resultsFound = false;

    categoryNewsCards.forEach(card => {
        const title = card.querySelector('.news-card__title').textContent.toLowerCase();

        if (title.includes(query)) {
            card.style.display = 'block';
            resultsFound = true;
        } else {
            card.style.display = 'none';
        }
    });

    if (!resultsFound) {
        Toastify({
            text: "No news articles found for your search term. Please try another phrase.",
            duration: -1,
            close: true,
            gravity: "bottom",
            position: "right",
            backgroundColor: "#b90745",
            stopOnFocus: true,
            offset: {
                x: 0, // horizontal axis - can be a number or a string indicating unity. eg: '2em'
                y: 200 // vertical axis - can be a number or a string indicating unity. eg: '2em'
              },
        }).showToast();
    }
});

//Clear Search Bar
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('search-input').value = '';
});
