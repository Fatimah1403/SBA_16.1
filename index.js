//-------Form validation---------
const log = console.log;

const emailD = document.getElementById("email").value;
const passwordD = document.getElementById("password").value
const form = document.getElementById("form");
const email = form.elements["email"];
const password = form.elements["password"];

const validateEmail = () => {
    let emailVal = email.value;
   let emailPattern = /^[a-zA-Z0-9._-] + @[a-zA-z0-9] +\.[a-A-Z]{2,4}$/;

   if (!emailPattern.test(emailVal)) {
    alert("Please, enter a valid email");
    email.focus();
    return false;
   }
   return true;  
};
//-- validate password
const validatePassword = () => {
    let passVal = password.value;
    if (passVal === "" ) {
        alert("Please Provide a password")
        password.focus();
        return false;
    }

    if (passVal.length < 6){
        alert("Password must be at least 6 characters");
        password.focus();
        return false;
    }

    const specialCharPattern = /[\W_]/;
    if (!specialCharPattern.test(passVal)) {
        alert("Password must contain at least one special character");
        password.focus();
        return false;
    }
    return true;
};

const addValidationEventListener = (elem, validateFunction) => {
    elem.addEventListener("submit", (event) => {
        if(!validateFunction()) {
            event.preventDefault();
        } else {
            let passVal = password.value;
              let emailVal = email.value;
            if (authenticateUser(passVal, emailVal)) {
                window.location.href = "index.html"
            } else {
                alert("Authentication failed. Please check your credentials.")
            }
        }
    });
};
function authenticateUser(emailD, passwordD) {
    if (emailD === "emailD" && passwordD === "passwordD") {
        return true;
    } else {
        return false
    }

}
// Adding event listener for both email and password Validation.
addValidationEventListener(form, validateEmail);
addValidationEventListener(form, validatePassword);