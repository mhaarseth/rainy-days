import { validateEmail } from "./components/validateEmail.js";
import { checkLength } from "./components/checkLength.js";

const form = document.getElementById("contact-form");

const fullName = document.getElementById("full-name");
const email = document.getElementById("e-mail");
const subject = document.getElementById("inquiry");
const message = document.getElementById("message");

const fullNameError = document.querySelector(".full-name-error");
const emailError = document.querySelector(".email-error");
const subjectError = document.querySelector(".subject-option-error");
const messageError = document.querySelector(".message-error");
const successMessage = document.querySelector(".success-message-container");

function formValidation(event) {
  event.preventDefault();

  if (checkLength(fullName.value, 0)) {
    fullNameError.style.display = "none";
  } else {
    fullNameError.style.display = "block";
  }

  if (!validateEmail(email.value)) {
    emailError.style.display = "block";
  } else {
    emailError.style.display = "none";
  }

  if (subject.value === "") {
    subjectError.style.display = "block";
  } else {
    subjectError.style.display = "none";
  }

  if (checkLength(message.value, 16)) {
    messageError.style.visibility = "hidden";
  } else {
    messageError.style.visibility = "visible";
  }

  if (
    checkLength(fullName.value, 0) &&
    validateEmail(email.value) &&
    !subject.value == "" &&
    checkLength(message.value, 16)
  ) {
    successMessage.style.visibility = "visible";
  } else {
    successMessage.style.visibility = "hidden";
  }
}

form.addEventListener("submit", formValidation);
