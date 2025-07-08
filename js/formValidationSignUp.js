// sign up nawili

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

let repPassField = document.getElementById('pass-rep-field');
let passField = document.getElementById("pass-field");
let validPass = 2;
let repVal = 2;

function passValidation() {
  let passValue = passField.value;
  let passError = document.getElementById("pass-error");
  let repPassError = document.getElementById('pas-rep-error');

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

  if(repPassField.value === passValue && (repPassField.value !== '' || passValue !== '')){
    repPassError.textContent = ''
    repPassField.style.transition = "0.5s";
    repPassField.style.borderBottom = `rgb(37, 182, 80) solid 2px`;
    repVal = 1;
  }else{
    repPassError.textContent = 'passwords dont much'
    repPassField.style.transition = "0.5s";
    repPassField.style.borderBottom = `rgb(155, 37, 37) solid 2px`;
    repVal = 0;
  }
}


function repPassValidation() {
  let passValue = passField.value;
  let repPassValue = repPassField.value;
  let repPassError = document.getElementById('pas-rep-error');

  
 
  if(passValue === repPassValue && (repPassField.value !== '' || passValue !== '')){
    repPassError.textContent = ''
    repPassField.style.transition = "0.5s";
    repPassField.style.borderBottom = `rgb(37, 182, 80) solid 2px`;
    repVal = 1;
   
  }else if(passValue !== repPassValue){
     repPassError.textContent = 'passwords dont much'
    repPassField.style.transition = "0.5s";
    repPassField.style.borderBottom = `rgb(155, 37, 37) solid 2px`;
    repVal = 0;
    
  }else{
    repPassError.textContent = ''
    repPassField.style.borderBottom = "antiquewhite solid 2px";
    repPassField.style.transition = "0.5s";
    repVal = 2;
  }

    
}


let usrField = document.getElementById("username");
let validUsr = 2;

function usrValidation() {
  let usrValue = usrField.value;
  let usrError = document.getElementById("usrnm-error");

  if (usrValue.length >= 10) {
    usrField.style.transition = "0.5s";
    usrField.style.borderBottom = `rgb(37, 182, 80) solid 2px`;
    validUsr = 1;
    usrError.textContent = "";
  } else {
    usrField.style.transition = "0.5s";
    usrField.style.borderBottom = `rgb(155, 37, 37) solid 2px`;
    usrError.textContent = "Must be longer than 10 characters";
    validUsr = 0;
  }

  if (usrValue === "") {
    usrField.style.borderBottom = "antiquewhite solid 2px";
    usrField.style.transition = "0.5s";
    usrError.textContent = "";
    validUsr = 2;
  }
}




let formSignUpSection = document.querySelector(".form-signup-class");

formSignUpSection.addEventListener("submit", function (e) {
  e.preventDefault();
  let usrError = document.getElementById("usrnm-error");
  let emailError = document.getElementById("email-error");
  let passError = document.getElementById("pass-error");
  let passField = document.getElementById("pass-field");
  let birthdate = document.getElementById('birthdate');
  let birthError = document.getElementById('birth-error');
  let terms = document.getElementById('term-accept');
  let termsErr = document.getElementById('terms-error');
  let otherErrors = []
  
  if (validUsr === 2) {
    usrError.textContent = "Please fillout the field below";
    usrField.style.transition = "0.5s";
    usrField.style.borderBottom = `rgb(155, 37, 37) solid 2px`;
  }
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
  let date = String(birthdate.value).split('-')
  if(date.length === 1){
    otherErrors.push(0);
    birthError.textContent = 'Select birth date';
    birthdate.style.transition = "0.5s";
    birthdate.style.borderBottom = `rgb(155, 37, 37) solid 2px`;
  }else if(date[0] >= 2024){
    otherErrors.push(0);
    birthError.textContent = 'Too young';
    birthdate.style.transition = "0.5s";
    birthdate.style.borderBottom = `rgb(155, 37, 37) solid 2px`;
  }else{
    birthError.textContent = '';
    birthdate.style.transition = "0.5s";
    birthdate.style.borderBottom = `rgb(37, 182, 80) solid 2px`;
  }
  if(!terms.checked){
    otherErrors.push(0);
    termsErr.textContent = 'You must accept our Terms'
  }else{
    termsErr.textContent = ''
  }
  if (validMail === 1 && validPass === 1 && validUsr === 1 && repVal === 1 && otherErrors.length === 0) {
    this.submit();
  }
});

emailField.addEventListener("keyup", emailValidation);
passField.addEventListener("keyup", passValidation);
usrField.addEventListener("keyup", usrValidation);
repPassField.addEventListener("keyup", repPassValidation);


// parolis sanaxavi logika
let showHideDiv = document.querySelector('.show-hide-div')
let showHideDivrep = document.querySelector('.show-hide-div-rep')
let eyeIcon = document.querySelector('.fa-eye')
let slashEyeIcon = document.querySelector('.fa-eye-slash')
slashEyeIcon.style.display = 'none'
showHideDiv.addEventListener('click',function(){
    if(passField.type === 'password'){
        repPassField.type = 'text'
        passField.type = 'text'
        eyeIcon.style.display = 'none'
        slashEyeIcon.style.display = 'inline'
    }else{
        
        repPassField.type = 'text'
         eyeIcon.style.display = 'inline'
         slashEyeIcon.style.display = 'none'
        passField.type = 'password'
        repPassField.type = 'password'
    }
})