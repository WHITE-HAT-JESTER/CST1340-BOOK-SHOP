(function() {
  // Show/hide dropdown
  function toggleDropdown() {
    const dropdown = document.getElementById("dropdown");
    if (dropdown) dropdown.classList.toggle("hide");
  }
  window.toggleDropdown = toggleDropdown;

  // Close dropdown when clicking outside
  window.onclick = function(event) {
    if (!event.target.closest('.dropdown')) {
      const dropdown = document.getElementById("dropdown");
      if (dropdown) dropdown.classList.remove("show");
    }
  };

  // Filter books by genre
  function filterBooks(genre) {
    const isHome = document.body.hasAttribute('data-homepage');
    const limit = genre ? null : (isHome ? 5 : null);
    loadBooks(genre, limit);
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

      // Randomize if homepage limit
      if (!genre && limit && books.length > limit) {
        books.sort(() => Math.random() - 0.5);
        books = books.slice(0, limit);
      }

      // Build HTML output
      container.innerHTML = books.map(book => {
        const title = book.getElementsByTagName('title')[0]?.textContent || "Unknown Title";
        const authorFirst = book.getElementsByTagName('firstname')[0]?.textContent || "";
        const authorLast = book.getElementsByTagName('lastname')[0]?.textContent || "";
        const author = `${authorFirst} ${authorLast}`.trim();
        const details = book.getElementsByTagName('details')[0]?.textContent || "";
        const price = book.getElementsByTagName('price')[0]?.textContent || "";
        const cover = book.getElementsByTagName('cover')[0]?.textContent.trim() || "";
        const bookGenre = book.getAttribute('genre') || 'Unknown';

        // genre-safe local fallback
        const genreKey = bookGenre.toLowerCase().replace(/[-\s]+/g, '');
        const localGenreImage = `images/${genreKey}cover.png`;

        // Decide image URL
        let imageUrl = cover;
        if (!imageUrl) {
          const isbn = book.getElementsByTagName('ISBN')[0]?.textContent.trim();
          if (isbn) {
            imageUrl = `https://covers.openlibrary.org/b/isbn/${encodeURIComponent(isbn)}-M.jpg`;
          } else {
            imageUrl = `https://covers.openlibrary.org/b/title/${encodeURIComponent(title)}-M.jpg`;
          }
        }

        return `
          <div class="card" data-bookcard>
            <div class="card-front">
              <img src="${imageUrl}" alt="${title}" onerror="this.onerror=null;this.src='${localGenreImage}';">
            </div>
            <div class="card-back">
              <h1>${title}</h1>
              <h3>by ${author}</h3>
              ${price ? `<h5>$${price}</h5>` : ""}
              ${details ? `<p>${details}</p>` : ""}
            </div>
          </div>
          <div class="book-tag">
            <h2>${title}</h2>
            <h3>by ${author}</h3>
          </div>
        `;
      }).join('');
    };
    xhr.send();
  }

  // Load initial books
  if (document.body.hasAttribute('data-homepage')) {
    loadBooks(null, 6);
  } else {
    loadBooks();
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
  



