const email = document.getElementById("email");
const password = document.getElementById("password");
const form = document.getElementById("form");
const confirmPassword = document.getElementById("confirm-password");
const phoneNumber = document.getElementById("phone-number");
const lastname = document.getElementById("lastname");
const firstname = document.getElementById("firstname");

const passwordError = document.querySelector(".password-error");
const passwordInvalid = document.querySelector("#password");
const emailError = document.querySelector(".email-error");
const emailInvalid = document.querySelector("#email");
const firstnameError = document.querySelector(".firstname-error");
const firstnameInvalid = document.querySelector("#firstname");
const lastnameError = document.querySelector(".lastname-error");
const lastnameInvalid = document.querySelector("#lastname");
const phoneNumberError = document.querySelector(".phoneNumber-error");
const phoneNumberInvalid = document.querySelector("#phone-number");
const confirmError = document.querySelector(".confirm-error");
const confirmInvalid = document.querySelector("#confirm-password");




form.addEventListener("submit", (e) => {
  //email check
  if (!email.value.includes("@")) {
    emailError.classList.add("err");
    emailInvalid.classList.add("invalid");
    emailError.textContent = "Please enter a valid email address";
    e.preventDefault();
  } else {
    emailError.textContent = "";
    emailError.classList.remove("err");
    emailInvalid.classList.remove("invalid");
    emailInvalid.classList.add("valid");
  }
  //password check
  if (password.value.length < 10) {
    passwordError.classList.add("err");
    passwordInvalid.classList.add("invalid");
    passwordError.textContent = "Password must contain at least 10 characters";
    e.preventDefault();
  } else if (!(password.value === confirmPassword.value)) {
    passwordInvalid.classList.add("invalid");

    confirmError.classList.add("err");
    confirmInvalid.classList.add("invalid");
    confirmError.textContent = "Passwords do not match";
    e.preventDefault();
  } else {
    passwordError.textContent = "";
    passwordInvalid.classList.remove("invalid");
    passwordInvalid.classList.add("valid");
    confirmError.textContent = "";
    confirmInvalid.classList.remove("invalid");
    confirmInvalid.classList.add("valid");
    confirmError.classList.remove("err");
  }
  // first name check
  if (firstname.value.length <= 1) {
    firstnameError.classList.add("err");
    firstnameInvalid.classList.add("invalid");
    firstnameError.textContent = "Please enter a valid name";
    e.preventDefault();
  } else {
    firstnameError.textContent = "";
    firstnameInvalid.classList.remove("invalid");
    firstnameInvalid.classList.add("valid");
    firstnameError.classList.remove("err");
  }
  //last name check
  if (lastname.value.length <= 1) {
    lastnameError.classList.add("err");
    lastnameInvalid.classList.add("invalid");
    lastnameError.textContent = "Please enter a valid name";
    e.preventDefault();
  } else {
    lastnameError.textContent = "";
    lastnameInvalid.classList.remove("invalid");
    lastnameInvalid.classList.add("valid");
    lastnameError.classList.remove("err");
  }
  //phone number check
  if (phoneNumber.value.length < 10) {
    phoneNumberError.classList.add("err");
    phoneNumberInvalid.classList.add("invalid");
    phoneNumberError.textContent = "Please enter a 10 digit phone number";
    e.preventDefault();
  } else {
    phoneNumberError.textContent = "";
    phoneNumberInvalid.classList.remove("invalid");
    phoneNumberInvalid.classList.add("valid");
    phoneNumberError.classList.remove("err");
  }
});
