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
  



