const submit = document.querySelector(".btn-submit");
const hide = document.querySelector(".hide");

submit.addEventListener("click", (event) => {
  event.preventDefault();
  validateEmail();
});

function validateEmail() {
  // get the value from the email input field
  const email = document.getElementById("email");
  const error = document.querySelector(".error-message");
  // use a regular expression to check if the email is valid
  let emailRegex = /\S+@\S+\.\S+/;
  // test the email value against the regular expression
  let isEmailValid = emailRegex.test(email.value);
  // if the email is valid, display the success message
  if (!isEmailValid) {
    // Display error state
    email.style.border = "2px solid red";
    email.style.backgroundColor = "hsl(4, 70%, 91%)";
    email.style.color = "red";
    error.innerHTML = "Valid email required";
    error.style.color = "red";
    return false; // stop the form from submitting
  } else {
    // Toggle the classes to hide/show elements

    document.querySelector(".info").classList.toggle("hide");
    document.querySelector(".mobile-image").classList.toggle("hide");
    hide.classList.toggle("hide");

    // Clear the input field value and error message
    email.value = "";
    error.innerHTML = "";

    /*
    hide.classList.remove("hide");
    // Hide the form
    document.querySelector(".info").classList.add("hide");
    // Hide the mobile image
    document.querySelector(".mobile-image").classList.add("hide");

    email.value = ""; // clear the input field value
    error.innerHTML = ""; // clear the error message
    return false; // allow the form to submit
    */
  }
}
