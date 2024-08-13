/* FORM ELEMENTS */
const form = document.getElementById("contact-form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");
const charCount = document.getElementById("char-count");
const textareaHint = document.getElementById("form-textarea-hint");
const formButton = document.getElementById("form-button");
const buttonText = document.getElementById("form-button-text");
const buttonIcon = document.getElementById("button-icon");

/* ERROR ELEMENTS */
const nameError = document.getElementById("name-error");
const emailError = document.getElementById("email-error");
const messageError = document.getElementById("message-error");

/* CONSTANTS */
const nameMaxLength = 30;
const messageMaxLength = 200; // CHANGE THE VALUE TO CHANGE MESSAGE MAX LENGTH AUTHORIZED
const nameErrorMessage = "Veuillez renseigner votre nom";
const nameErrorLengthMessage = `Le nom ne peut pas dépasser ${nameMaxLength} caractères`;
const emailErrorEmptyMessage = "Veuillez renseigner votre email";
const emailErrorMessage = "L'email n'est pas valide";
const messageErrorMessage = "Veuillez renseigner votre message";
const messageErrorLengthMessage = `Le message ne peut pas dépasser ${nameMaxLength} caractères`;

/* REGEX FOR CHECKING IF EMAIL IS VALID */
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

/* INITIALISATION */
/* formButton.setAttribute("disabled", "true"); */
buttonText.textContent = "Envoyer";
charCount.textContent = `Nombre de caractères : 0/${messageMaxLength}`;
nameError.style.display = "none";
emailError.style.display = "none";
messageError.style.display = "none";
buttonIcon.classList.add("bx");
buttonIcon.classList.add("bx-paper-plane");

/* UTILS FUNCTIONS */
/* SANITIZE ANY INPUTS */
const sanitizeInput = (inputValue) => {
  return inputValue.replace(/&/g, ' ').replace(/</g, ' ').replace(/>/g, ' ').replace(/"/g, ' ').replace(/'/g, ' ').replace(/\//g, ' ');
};

/* DATE TO SEND */
const mailData = {
  name: "",
  email: "",
  message: "",
};

/* REINITIALIZE BUTTON */
const reinitializeButton = () => {
  buttonIcon.classList.add("bx-paper-plane");
  buttonIcon.classList.remove("bx-check");
  buttonText.textContent = "Envoyer";
};

/* GET NAME INPUT VALUE */
nameInput.addEventListener("input", () => {
  nameInput.classList.remove("input-error");
  formButton.removeAttribute("disabled");
  nameError.style.display = "none";
  reinitializeButton();
  const value = nameInput.value;
  mailData.name = sanitizeInput(value);
});

/* GET EMAIL INPUT VALUE */
emailInput.addEventListener("input", () => {
  emailInput.classList.remove("input-error");
  formButton.removeAttribute("disabled");
  emailError.style.display = "none";
  reinitializeButton();
  const value = emailInput.value;
  mailData.email = sanitizeInput(value);

});

/* GET MESSAGE INPUT VALUE */
messageInput.addEventListener("input", () => {
  messageInput.classList.remove("input-error");
  formButton.removeAttribute("disabled");
  messageError.style.display = "none";
  reinitializeButton();
  const value = messageInput.value;
  mailData.message = sanitizeInput(value);
  updateCharCount();
});

/* UPDATE CHARACTERS COUNT AND ADD ERROR IF NEEDED */
const updateCharCount = () => {
  const currentLength = messageInput.value.length;
  charCount.textContent = `Nombre de caractères : ${currentLength}/${messageMaxLength}`;
  if (currentLength > messageMaxLength) {
    charCount.classList.add("error-text");
    messageInput.classList.add("input-error");
    textareaHint.classList.add("textarea-hint");
    messageError.style.display = "block";
    messageError.textContent = messageErrorLengthMessage;
  } else {
    charCount.classList.remove("error-text");
    messageInput.classList.remove("input-error");
    textareaHint.classList.remove("textarea-hint");
    messageError.style.display = "none";
    formButton.removeAttribute("disabled");
  }
};

/* CHECKING IF FORM IS VALID AND SHOW ERRORS */
const checkForm = () => {
  const { name, email, message } = mailData;
  let formIsValid = true;

  if (name === "") {
    nameError.style.display = "block";
    nameInput.classList.add("input-error");
    nameError.textContent = nameErrorMessage;
    formIsValid = false;
  } else if (name.length > nameMaxLength) {
    nameError.style.display = "block";
    nameInput.classList.add("input-error");
    nameError.textContent = nameErrorLengthMessage;
    formIsValid = false;
  } else {
    nameError.style.display = "none";
    nameInput.classList.remove("input-error");
  }

  if (email == "") {
    emailError.style.display = "block";
    emailInput.classList.add("input-error");
    emailError.textContent = emailErrorEmptyMessage;
    formIsValid = false;
  } else if (!emailRegex.test(email)) {
    emailError.style.display = "block";
    emailInput.classList.add("input-error");
    emailError.textContent = emailErrorMessage;
    formIsValid = false;
  } else {
    emailError.style.display = "none";
    emailInput.classList.remove("input-error");
  }

  if (message == "") {
    messageError.style.display = "block";
    messageInput.classList.add("input-error");
    messageError.textContent = messageErrorMessage;
    formIsValid = false;
  } else if (message.length > messageMaxLength) {
    messageError.style.display = "block";
    messageInput.classList.add("input-error");
    messageError.textContent = messageErrorLengthMessage;
    formIsValid = false;
  } else {
    messageError.style.display = "none";
    messageInput.classList.remove("input-error");
  }

  sendMail(formIsValid);
};

/* SENDING MAIL */
const sendMail = (formIsValid) => {
  formButton.setAttribute("disabled", "true");
  if (!formIsValid) {
    console.error("Il y a une ou plusieurs erreurs dans le formulaire ! ");
  } else {
    buttonIcon.classList.remove("bx-paper-plane");
    buttonIcon.classList.add("bx-loader-alt");
    buttonIcon.classList.add("spin");

    /* SIMULATE EMAIL SENT TO SEE LOADER AND TEXT CHANGES */
    /* Here we would make an AJAX request to an API for example */
    setTimeout(() => {
      buttonIcon.classList.add("bx-check");
      buttonIcon.classList.remove("bx-loader-alt");
      buttonIcon.classList.remove("spin");
      buttonText.textContent = "Message envoyé";
      console.log("Message envoyé avec ces données : ");

      /* SEE THE INFOS IN THE CONSOLE */
      console.log("Form Data:", mailData);

    }, 3000);
  }
};

/* CHECKING FORM AND SEND IF OK */
form.addEventListener("submit", (event) => {
  event.preventDefault();
  checkForm();
});
