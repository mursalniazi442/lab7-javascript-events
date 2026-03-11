// Mouse Events

const hoverButton = document.getElementById("hoverButton");

const mouseMessage = document.getElementById("mouseMessage");



hoverButton.addEventListener("mouseenter", function () {

  mouseMessage.textContent = "Mouse is over the button.";

});



hoverButton.addEventListener("mouseleave", function () {

  mouseMessage.textContent = "Mouse left the button.";

});



// Keyboard Events

const keyboardInput = document.getElementById("keyboardInput");

const keyboardMessage = document.getElementById("keyboardMessage");



keyboardInput.addEventListener("keydown", function (event) {

  keyboardMessage.textContent = "Last key pressed: " + event.key;

});



// Form Events

const myForm = document.getElementById("myForm");

const nameInput = document.getElementById("nameInput");

const formMessage = document.getElementById("formMessage");



myForm.addEventListener("submit", function (event) {

  event.preventDefault();

  formMessage.textContent = "Form submitted successfully. Hello, " + nameInput.value + "!";

});



// Focus and Blur Events

const focusInput = document.getElementById("focusInput");

const focusMessage = document.getElementById("focusMessage");



focusInput.addEventListener("focus", function () {

  focusMessage.textContent = "The input field is focused.";

});



focusInput.addEventListener("blur", function () {

  focusMessage.textContent = "The input field lost focus.";

});



// Event Delegation

const buttonContainer = document.getElementById("buttonContainer");

const delegateMessage = document.getElementById("delegateMessage");



buttonContainer.addEventListener("click", function (event) {

  if (event.target.tagName === "BUTTON") {

    delegateMessage.textContent = "You clicked " + event.target.textContent;

  }

});

