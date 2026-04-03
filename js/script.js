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

  
// Fetch reviews from review.json
async function loadReviews() {
  try {
    const response = await fetch('./review.json');  // same folder as homepage.html
    const data = await response.json();

    const container = document.getElementById('review-container');
    container.innerHTML = '';  // clear the placeholder text

    data.reviews.forEach(review => {
      const stars = '⭐'.repeat(review.rating);

      const card = document.createElement('div');
      card.classList.add('review-card');
      card.innerHTML = `
        <h3>${review.user}</h3>
        <p><strong>Rating:</strong> ${stars} (${review.rating}/5)</p>
        <p>${review.comment}</p>
      `;
      container.appendChild(card);
    });

  } catch (error) {
    console.error('Error loading reviews:', error);
  }
}

loadReviews(); 

})();


