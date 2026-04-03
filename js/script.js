(function() {
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
// Build HTML output
      container.innerHTML = books.map(book => {
        const title = book.getElementsByTagName('title')[0]?.textContent ;
        const authorFirst = book.getElementsByTagName('firstname')[0]?.textContent ;
        const authorLast = book.getElementsByTagName('lastname')[0]?.textContent ;
        const author = `${authorFirst} ${authorLast}`.trim();
        const description = book.getElementsByTagName('description')[0]?.textContent;
        const price = book.getElementsByTagName('price')[0]?.textContent ;
        const cover = book.getElementsByTagName('cover')[0]?.textContent.trim() ;
        const bookGenre = book.getAttribute('genre') ;

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
          }
          else{imageUrl = localGenreImage;}
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
              ${description ? `<p>${description}</p>` : ""}
            </div>
          </div>
          <div class="book-tag">
            <h2>${title}</h2>
            <h3>by ${author}</h3>
          </div>
        `;
      });

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
  



