// sign in nawili

let emailField = document.getElementById("email-field");
let validMail = 2;
function emailValidation() {
  let emailValue = emailField.value;
  let emailError = document.getElementById("email-error");
  let pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (pattern.test(emailValue)) {
    emailField.style.transition = "0.5s";
    emailField.style.borderBottom = `rgb(37, 182, 80) solid 2px`;
    validMail = 1;
    emailError.textContent = "";
  } else {
    emailField.style.transition = "0.5s";
    emailField.style.borderBottom = `rgb(155, 37, 37) solid 2px`;
    emailError.textContent = "Invalid email";
    validMail = 0;
  }

  if (emailValue === "") {
    emailField.style.borderBottom = "antiquewhite solid 2px";
    emailField.style.transition = "0.5s";
    emailError.textContent = "";
    validMail = 2;
  }
}

let passField = document.getElementById("pass-field");
let validPass = 2;

function passValidation() {
  let passValue = passField.value;
  let passError = document.getElementById("pass-error");

  if (passValue.length >= 8) {
    passField.style.transition = "0.5s";
    passField.style.borderBottom = `rgb(37, 182, 80) solid 2px`;
    validPass = 1;
    passError.textContent = "";
  } else {
    passField.style.transition = "0.5s";
    passField.style.borderBottom = `rgb(155, 37, 37) solid 2px`;
    validPass = 0;
    passError.textContent = "must be at least 8 characters long";
  }

  if (passValue === "") {
    passField.style.borderBottom = "antiquewhite solid 2px";
    passField.style.transition = "0.5s";
    passError.textContent = "";
    validPass = 2;
  }
}



let formSignInSection = document.querySelector(".form-signin-class");

formSignInSection.addEventListener("submit", function (e) {
  e.preventDefault();
  let emailError = document.getElementById("email-error");
  let passError = document.getElementById("pass-error");
  if (validMail === 2) {
    emailError.textContent = "Please fillout the field below";
    emailField.style.transition = "0.5s";
    emailField.style.borderBottom = `rgb(155, 37, 37) solid 2px`;
  }
  if (validPass === 2) {
    passError.textContent = "Please fillout the field below";
    passField.style.transition = "0.5s";
    passField.style.borderBottom = `rgb(155, 37, 37) solid 2px`;
    
  }
  if (validMail === 1 && validPass === 1) {
    this.submit();
  }
});

emailField.addEventListener("keyup", emailValidation);
passField.addEventListener("keyup", passValidation);



