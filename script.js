const form = document.querySelector("#form");
const email = document.querySelector("#email");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const successMsg = document.querySelector("#success-state");
  const signUp = document.querySelector("#wrapper");

  validateInput();
  if (!validateInput) {
    signUp.classList.remove("hidden");
    successMsg.classList.remove("succeed");
  } else {
    signUp.classList.add("hidden");
    successMsg.classList.add("succeed");

    const dismissBtn = document.querySelector("#dismiss-btn");

    dismissBtn.addEventListener("click", () => {
      signUp.classList.remove("hidden");
      successMsg.classList.remove("succeed");
    });
  }
});

const setError = (element, message) => {
  const inputControl = element;
  const errorMsg = document.querySelector(".error-msg");

  inputControl.style.borderColor = "#ff3333";
  inputControl.style.color = "#ff3333";
  inputControl.style.backgroundColor = "rgba(255,51,51,0.3)";
  errorMsg.innerText = message;
};

const setSuccess = (element) => {
  const inputControl = element;
  const errorMsg = document.querySelector(".error-msg");

  inputControl.style.borderColor = "#4bb543";
  inputControl.style.color = "black";
  inputControl.style.backgroundColor = "rgba(75,181,67,0.3)";
  errorMsg.innerText = "";
};

const isValidEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return re.test(String(email).toLowerCase());
};

const validateInput = () => {
  const emailValue = email.value.trim();

  if (emailValue === "") {
    setError(email, "Valid email required");
    return false;
  } else if (!isValidEmail(emailValue)) {
    setError(email, "Valid email required");
    return false;
  } else {
    setSuccess(email);
    return true;
  }
};
