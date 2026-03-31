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

// SIGN UP FORM 
//subject to change as there are naming inconsistencies
const signup = document.getElementById("signupform");
const open_sign_up = document.getElementById("sign_up");
const close_sign_up = document.getElementById("closeSignup");
const submit_sign_up = document.getElementById("submit_signup");

// opens up modal to sign up
open_sign_up.addEventListener("click", () => {
    signup.style.display = "block";
})

// closes sign up form
close_sign_up.addEventListener("click", () => {
    signup.style.display = "none";
})

// submits form (closes the form as no data is sent anywhere)
submit_sign_up.addEventListener("click", () => {
    signup.style.display = "none";
})


// LOG IN FORM

const login = document.getElementById("loginform");
const open_log_in = document.getElementById("log_in");
const close_log_in = document.getElementById("closeLogin");
const submit_log_in = document.getElementById("submit_login");

// opens up modal to log in
open_log_in.addEventListener("click", () => {
    login.style.display = "block";
})

// closes log in form
close_log_in.addEventListener("click", () => {
    login.style.display = "none";
})

// submits form (closes the form as no data is sent anywhere)
submit_log_in.addEventListener("click", () => {
    login.style.display = "none";
})


// AFTER MODEL
// when we get the full description modal
const bookcards= function (){document.getElementsByClassName('bookcard-container');
       
    for (let i = 0; i < bookcards.length; i++) {
            
        bookcards[i].addEventListener("hover", () => {
                document.getElementById('full-description').style.display = "block";

                 window.onclick = function(event) {

                //if it is the full decription, close it
                if (event.target == book) {
                    book.style.display = "none";
                    }

            }
            })

           
        }

        return bookcards;
};

document.getElementById('bookcard-container')= bookcards();


