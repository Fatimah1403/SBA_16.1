//-------Form validation---------
const log = console.log;

// const emailD = document.getElementById("email").value;
// const passwordD = document.getElementById("password").value
const form = document.getElementById("form");
const email = document.getElementById("email");
const password = document.getElementById("password");

const email_error = "Please fill up your Email";
const pass_error = "Please fill up your Password";


const validateEmail = () => {
    let emailVal = email.value;
    let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let msg = []

   if (emailVal === "" || emailVal === null) {
    msg.push("Email field is required")
   }
   if (!emailPattern.test(emailVal)) {
    alert("Please, enter a valid email");
    email.focus();
    return false;
   }
   if (emailVal.length < 9) {
    email.style.border = "1px solid red";
    email_error.style.display = "block";
    email.focus();
    return false
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
const validateForm = () => {
    if (!validateEmail() && !validatePassword()) {
        // Validation failed, prevent form submission
        return false;
    }
    //return true; // Form will submit
    return validateEmail() &&validatePassword();
};
form.addEventListener("submit", (event) => {
    if (!validateForm()) {
        event.preventDefault(); // Prevent form submission if validation fails
    } else {
        // form is validateEmail, redirect to HTMLModElement.html
        window.location.href = "home.html"
    }
});
// const addValidationEventListener = (elem, validateFunction) => {
//     elem.addEventListener("submit", (event) => {
//         if(!validateFunction()) {
//             event.preventDefault();
//         } 
//     });
// };
// // function authenticateUser(emailD, passwordD) {
// //     if (emailD === "emailD" && passwordD === "passwordD") {
// //         return true;
// //     } else {
// //         return false
// //     }

// // }
// // Adding event listener for both email and password Validation.
// addValidationEventListener(form, validateEmail);
// addValidationEventListener(form, validatePassword);

