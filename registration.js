function validateForm() {
    let submitForm = true;

    let name = document.registrationForm.nameForName.value;
    let email = document.registrationForm.emailForEmail.value;
    let password = document.registrationForm.Password.value;
    let confirmPassword = document.registrationForm.ConfirmPassword.value;

    if (name.length < 3) {
        alert("Name is too small");
        submitForm = false;
    }

    if (email.length < 3 || !email.includes("@")) {
        alert("Email is not valid");
        submitForm = false;
    }

    if (password.length < 2) {
        alert("Password is too small");
        submitForm = false;
    }

    if (password != confirmPassword) {
        alert("Password doesn't match");
        submitForm = false;
    }

    if (submitForm == true) {
        alert("Form submitted successfully");
    }

    return submitForm;
}