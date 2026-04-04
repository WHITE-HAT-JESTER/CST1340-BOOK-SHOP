//theme switcher coding2go
let darkmode = localStorage.getItem('darkmode') //assigning variable darkmode which can be reassigned when switching
const theme = document.getElementById('theme') //links theme button to js

// function adds darkmode to classlist and sets item as active to render webpage as darkmode
// darkmode state is stored inside localstorage so that the webpage will remain consistent upon reload of HTML
const enableDarkmode = () => {
    document.body.classList.add('darkmode')
    localStorage.setItem('darkmode','active')
}

//removes item darkmode from the class styling to change to lightmode
const disableDarkMode = () => {
    document.body.classList.remove('darkmode')
    localStorage.removeItem('darkmode')
}

// if the darkmode item was set to active, the  enable darkmode function is called
if(darkmode === 'active') enableDarkmode()

// listens for click on theme button from user and will check state of darkmode 
// sets to darkmode or disables it depending on storage
theme.addEventListener("click", () => {
    darkmode = localStorage.getItem('darkmode')
 darkmode !== "active" ? enableDarkmode() : disableDarkMode()
})