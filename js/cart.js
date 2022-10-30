import { checkLength } from "./components/checkLength.js";
import { validateEmail } from "./components/validateEmail.js";
import { generateCart } from "./components/generateCart.js";
import { emptyCart } from "./components/emptyCart.js";

const firstName = document.getElementById("first-name");
const firstNameError = document.querySelector(".first-name-error");

function firstNameValidation() {
  if (isNaN(firstName.value) && checkLength(firstName.value, 0)) {
    firstNameError.style.visibility = "visible";
    firstNameError.style.background = "green";
  } else {
    firstNameError.style.visibility = "visible";
    firstNameError.style.background = "red";
  }
}
firstName.addEventListener("blur", firstNameValidation);

const lastName = document.getElementById("last-name");
const lastNameError = document.querySelector(".last-name-error");

function lastNameValidation() {
  if (isNaN(lastName.value) && checkLength(lastName.value, 0)) {
    lastNameError.style.visibility = "visible";
    lastNameError.style.background = "green";
  } else {
    lastNameError.style.visibility = "visible";
    lastNameError.style.background = "red";
  }
}
lastName.addEventListener("blur", lastNameValidation);

const address = document.getElementById("street-name");
const addressError = document.querySelector(".address-error");

function addressValidation() {
  if (isNaN(address.value) && checkLength(address.value, 4)) {
    addressError.style.visibility = "visible";
    addressError.style.background = "green";
  } else {
    addressError.style.visibility = "visible";
    addressError.style.background = "red";
  }
}
address.addEventListener("blur", addressValidation);

const streetNumber = document.getElementById("street-number");
const streetNumberError = document.querySelector(".street-number-error");

function streetNumberValidation() {
  if (!isNaN(streetNumber.value) && checkLength(streetNumber.value, 0)) {
    streetNumberError.style.visibility = "visible";
    streetNumberError.style.background = "green";
  } else {
    streetNumberError.style.visibility = "visible";
    streetNumberError.style.background = "red";
  }
}
streetNumber.addEventListener("blur", streetNumberValidation);

const cityName = document.getElementById("city-name");
const cityNameError = document.querySelector(".city-name-error");

function cityNameValidation() {
  if (isNaN(cityName.value) && checkLength(cityName.value, 1)) {
    cityNameError.style.visibility = "visible";
    cityNameError.style.background = "green";
  } else {
    cityNameError.style.visibility = "visible";
    cityNameError.style.background = "red";
  }
}
cityName.addEventListener("blur", cityNameValidation);

const zipCode = document.getElementById("zip-code");
const zipCodeError = document.querySelector(".zip-code-error");

function zipCodeValidation() {
  if (!isNaN(zipCode.value) && checkLength(zipCode.value, 3)) {
    zipCodeError.style.visibility = "visible";
    zipCodeError.style.background = "green";
  } else {
    zipCodeError.style.visibility = "visible";
    zipCodeError.style.background = "red";
  }
}
zipCode.addEventListener("blur", zipCodeValidation);

const telNumber = document.getElementById("tel");
const telNumberError = document.querySelector(".tel-number-error");

function telNumberValidation() {
  if (!isNaN(telNumber.value) && checkLength(telNumber.value, 7)) {
    telNumberError.style.visibility = "visible";
    telNumberError.style.background = "green";
  } else {
    telNumberError.style.visibility = "visible";
    telNumberError.style.background = "red";
  }
}
telNumber.addEventListener("blur", telNumberValidation);

const eMail = document.getElementById("e-mail");
const eMailError = document.querySelector(".e-mail-error");

function checkoutMailValidate() {
  if (!validateEmail(eMail.value)) {
    eMailError.style.visibility = "visible";
    eMailError.style.background = "red";
  } else {
    eMailError.style.visibility = "visible";
    eMailError.style.background = "green";
  }
}
eMail.addEventListener("blur", checkoutMailValidate);

const delivery = document.getElementById("delivery");
const deliveryError = document.querySelector(".delivery-error");

function deliveryValidation() {
  if (delivery.value === "") {
    deliveryError.style.visibility = "visible";
    deliveryError.style.background = "red";
  } else {
    deliveryError.style.visibility = "visible";
    deliveryError.style.background = "green";
  }
}
delivery.addEventListener("mouseup", deliveryValidation);

const cardName = document.getElementById("card-name");
const cardNameError = document.querySelector(".card-name-error");

function cardNameValidation() {
  if (isNaN(cardName.value) && checkLength(cardName.value, 2)) {
    cardNameError.style.visibility = "visible";
    cardNameError.style.background = "green";
  } else {
    cardNameError.style.visibility = "visible";
    cardNameError.style.background = "red";
  }
}
cardName.addEventListener("blur", cardNameValidation);

const cardNumber = document.getElementById("card-number");
const cardNumberError = document.querySelector(".card-number-error");

function cardNumberValidation() {
  if (!isNaN(cardNumber.value) && checkLength(cardNumber.value, 11)) {
    cardNumberError.style.visibility = "visible";
    cardNumberError.style.background = "green";
  } else {
    cardNumberError.style.visibility = "visible";
    cardNumberError.style.background = "red";
  }
}
cardNumber.addEventListener("blur", cardNumberValidation);

const cvcNumber = document.getElementById("cvc");
const cvcNumberError = document.querySelector(".cvc-number-error");

function cvcNumberValidation() {
  if (!isNaN(cvcNumber.value) && checkLength(cvcNumber.value, 2)) {
    cvcNumberError.style.visibility = "visible";
    cvcNumberError.style.background = "green";
  } else {
    cvcNumberError.style.visibility = "visible";
    cvcNumberError.style.background = "red";
  }
}
cvcNumber.addEventListener("blur", cvcNumberValidation);

const expiryDate = document.getElementById("expiry-date");
const expiryDateError = document.querySelector(".expiry-date-error");

function expiryDateValidation() {
  if (checkLength(expiryDate.value, 9)) {
    expiryDateError.style.visibility = "visible";
    expiryDateError.style.background = "green";
  } else {
    expiryDateError.style.visibility = "visible";
    expiryDateError.style.background = "red";
  }
}
expiryDate.addEventListener("blur", expiryDateValidation);

const orderForm = document.getElementById("order-form");
const orderSuccess = document.querySelector(".order-success");
const orderFailure = document.querySelector(".order-failure");

function placeOrder(event) {
  event.preventDefault();

  if (
    isNaN(firstName.value) &&
    checkLength(firstName.value, 0) &&
    isNaN(lastName.value) &&
    checkLength(lastName.value, 0) &&
    isNaN(address.value) &&
    checkLength(address.value, 4) &&
    !isNaN(streetNumber.value) &&
    checkLength(streetNumber.value, 0) &&
    isNaN(cityName.value) &&
    checkLength(cityName.value, 1) &&
    !isNaN(zipCode.value) &&
    checkLength(zipCode.value, 3) &&
    !isNaN(telNumber.value) &&
    checkLength(telNumber.value, 7) &&
    validateEmail(eMail.value) &&
    delivery.value &&
    isNaN(cardName.value) &&
    checkLength(cardName.value, 2) &&
    !isNaN(cardNumber.value) &&
    checkLength(cardNumber.value, 11) &&
    !isNaN(cvcNumber.value) &&
    checkLength(cvcNumber.value, 2) &&
    checkLength(expiryDate.value, 9)
  ) {
    orderSuccess.style.display = "block";
  } else {
    orderFailure.style.visibility = "visible";
  }
}

orderForm.addEventListener("submit", placeOrder);

const signUpForm = document.querySelector(".make-password-container");
const makePassword = document.getElementById("make-password");
const confirmPassword = document.getElementById("confirm-password");

const makePasswordError = document.querySelector(".make-password-error");
const signedUp = document.querySelector(".signed-up-container");
const signUpContainer = document.querySelector(".order-success");

function signUp(event) {
  event.preventDefault();
  if (checkLength(makePassword.value, 7)) {
    makePasswordError.style.visibility = "hidden";
  } else {
    makePasswordError.style.visibility = "visible";
  }

  if (confirmPassword.value === makePassword.value) {
    signedUp.style.display = "block";
    signUpContainer.style.display = "none";
  } else {
    signedUp.style.display = "none";
    makePasswordError.style.visibility = "visible";
  }
}

signUpForm.addEventListener("submit", signUp);

generateCart();
emptyCart();
