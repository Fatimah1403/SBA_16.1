function validateForm() {
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const emailError = document.querySelector(".email_error");
    const passwordError = document.querySelector(".password_error");

    let isValid = true;

    // Email validation
    if (!emailInput.value) {
        emailError.style.display = "block";
        isValid = false;
    } else {
        emailError.style.display = "none";
    }

    // Password validation
    if (!passwordInput.value) {
        passwordError.style.display = "block";
        isValid = false;
    } else {
        passwordError.style.display = "none";
    }

    return isValid;
}

const loginForm = document.forms["form"];
loginForm.addEventListener("submit", validateForm);