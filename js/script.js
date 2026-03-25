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
// when we get the full description modal
var modal= document.getElementById('full-description');
            
window.onclick = function(event) {

    //if it is the full decription, close it
    if (event.target == modal) {
        modal2.style.display = "none";
        }
                        
}

