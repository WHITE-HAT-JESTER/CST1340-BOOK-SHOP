//browse page dropdown menu coding2go
function toggleDropdown() {
    const dropdown = document.getElementById("dropdown");
    dropdown.classList.toggle("show");

    // optional: redirect
    window.location.href = "browsepage.html";
}

    // Optional: close dropdown when clicking outside
    window.onclick = function(event) {
    if (!event.target.matches('.dropdown button')) {
        const dropdown = document.getElementById("dropdown");
        if (dropdown.classList.contains("show")) {
        dropdown.classList.remove("show");
        }
    }

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
    const fullBookDetailsTemplate = document.querySelector('[data-full-book-details-template]');
    const bookCardsContainer = document.querySelector('[data-bookcards-container]');
    const searchInput = document.querySelector('[data-search]');
    const searchButton = document.getElementById('search-button');

    let books = [];

    const applySearchFilter = () => {
        const searchTerm = searchInput.value.toLowerCase().trim();
        const bookCards = document.querySelectorAll('[data-bookcard]');

        bookCards.forEach(bookCard => {
            const title = bookCard.querySelector('h2').textContent.toLowerCase();
            const author = bookCard.querySelector('h3').textContent.toLowerCase();

            if (!searchTerm || title.includes(searchTerm) || author.includes(searchTerm)) {
                bookCard.style.display = 'block';
            } else {
                bookCard.style.display = 'none';
            }
        });
    };

    searchInput.addEventListener('input', applySearchFilter);
    if (searchButton) {
        searchButton.addEventListener('click', applySearchFilter);
    }

  
    fetch('books.xml')
        .then(response => response.text())
        .then(str => (new window.DOMParser()).parseFromString(str, "text/xml"))
        .then(xmlDoc => {
            const bookElements = xmlDoc.querySelectorAll('book');
            books = Array.from(bookElements).map(bookElement => {
                const bookCard = fullBookDetailsTemplate.content.cloneNode(true).children[0];
                const title = bookElement.querySelector('title').textContent;
                const author = bookElement.querySelector('author').textContent;
                // Populate bookCard with title and author here if needed
                bookCardsContainer.append(bookCard);
                return { title, author };
            });
        })
       
        

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



