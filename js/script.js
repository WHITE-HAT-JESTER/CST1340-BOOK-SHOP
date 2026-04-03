(function() {
  
  // Filter books by genre
  function filterBooks(genre) {
    loadBooks(genre);
  }
  window.filterBooks = filterBooks;

  // Load books from XML
  function loadBooks(genre = null, limit = null) {
    const container = document.querySelector('[data-bookcards-container]');
    if (!container) return;

    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'books.xml', true);
    xhr.onload = function() {
      if (xhr.status !== 200) return;
      const xml = xhr.responseXML;
      if (!xml) return;

      const allBooks = Array.from(xml.getElementsByTagName('book'));
      let books = allBooks.filter(book => {
        const g = book.getAttribute('genre');
        return !genre || (g && g.toLowerCase() === genre.toLowerCase());
      });

      // Build HTML output
      container.innerHTML = books.map(book => {
        const title = book.getElementsByTagName('title')[0]?.textContent;
        const authorFirst = book.getElementsByTagName('firstname')[0]?.textContent ;
        const authorLast = book.getElementsByTagName('lastname')[0]?.textContent;
        const author = `${authorFirst} ${authorLast}`.trim();
        const description = book.getElementsByTagName('description')[0]?.textContent;
        const price = book.getElementsByTagName('price')[0]?.textContent;
        const cover = book.getElementsByTagName('cover')[0]?.textContent.trim();
        const bookGenre = book.getAttribute('genre');

        // genre-safe local fallback
        const genreKey = bookGenre.toLowerCase().replace(/[-\s]+/g, '');
        const localGenreImage = `images/${genreKey}cover.png`;

        // Decide image URL
        let imageUrl = cover;
        if (!imageUrl) {
          const isbn = book.getElementsByTagName('ISBN')[0]?.textContent.trim();
          if (isbn) {
            imageUrl = `https://covers.openlibrary.org/b/isbn/${encodeURIComponent(isbn)}-M.jpg`;
          } else if (title) {
            imageUrl = `https://covers.openlibrary.org/b/title/${encodeURIComponent(title)}-M.jpg`;
          } else {
              imageUrl = localGenreImage;
          }
        }

         output +=`
          <div class="card" data-bookcard>
            <div class="card-front">
              <img src="${imageUrl}" alt="${title}" onerror="this.onerror=null;this.src='${localGenreImage}';">
            </div>
            <div class="card-back">
              <h1>${title}</h1>
              <h3>by ${author}</h3>
              ${price ? `<h5>$${price}</h5>` : ""}
              <p>${description ? `<p>${description}</p>` : ""}</p>
            </div>
          </div>
          <div class="book-tag">
            <h2>${title}</h2>
            <h3>by ${author}</h3>
          </div>
        `;
      });
    };
    xhr.send();
  }

//theme switcher coding2go

let darkmode = localStorage.getItem('darkmode')
const theme = document.getElementById('theme')

const enableDarkmode = () => {
    document.body.classList.add('darkmode')
    localStorage.setItem('darkmode','active')
}

const disableDarkMode = () => {
    document.body.classList.remove('darkmode')
    localStorage.setItem('darkmode',null)
}

if(darkmode === 'active') enableDarkmode()

theme.addEventListener("click", () => {
    darkmode = localStorage.getItem('darkmode')
 darkmode !== "active" ? enableDarkmode() : disableDarkMode()
})


// AFTER MODEL
// search bar filter function
const bookCardsContainer = document.querySelector('[data-bookcards-container]');
const searchInput = document.querySelector('[data-search]');
const searchButton = document.getElementById('search-button');

let books = [];

const applySearchFilter = () => {
    const searchTerm = searchInput?.value.toLowerCase().trim() || '';
    const bookCards = document.querySelectorAll('[data-bookcard]');

    bookCards.forEach(bookCard => {
        const title = bookCard.querySelector('h1')?.textContent.toLowerCase() || '';
        const author = bookCard.querySelector('h3')?.textContent.toLowerCase() || '';

        if (!searchTerm || title.includes(searchTerm) || author.includes(searchTerm)) {
            bookCard.style.display = 'block';
        } else {
            bookCard.style.display = 'none';
        }
    });
};

searchInput?.addEventListener('input', applySearchFilter);
searchButton?.addEventListener('click', applySearchFilter);

// hover-to-reveal full description for each book card
const bookCards = document.querySelectorAll('.bookcard-container');

bookCards.forEach(bookCard => {
    const fullDescription = bookCard.querySelector('.full-description');
    if (!fullDescription) return;

    bookCard.addEventListener('mouseenter', () => {
        fullDescription.style.display = 'block';
    });

    bookCard.addEventListener('mouseleave', () => {
        fullDescription.style.display = 'none';
    });
});

})();
  



