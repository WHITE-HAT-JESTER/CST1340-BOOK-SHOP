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
    const bookcards = document.querySelectorAll('.bookcard-container');

    bookcards.forEach(card => {
        const fullDescription = card.querySelector('.full-description');
        if (!fullDescription) return;

        card.addEventListener('mouseenter', () => {
            fullDescription.style.display = 'block';
        });

        card.addEventListener('mouseleave', () => {
            fullDescription.style.display = 'none';
        });
    });


