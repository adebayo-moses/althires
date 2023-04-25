import "./scss/style.scss";

const form = document.querySelector(".form") as HTMLFormElement;
const successMessage = document.querySelector(".success") as HTMLElement;
const errorMessage = document.querySelector(
  ".waitlist_form-error-w-form-fail"
) as HTMLElement;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const first = (document.getElementById("first") as HTMLInputElement).value;
  const last = (document.getElementById("last") as HTMLInputElement).value;
  const email = (document.getElementById("email") as HTMLInputElement).value;

  if (first && last && email) {
    // submit form data
    // show success message
    successMessage.classList.add("show");
    errorMessage.classList.remove("show");
    form.reset();
  } else {
    // show error message
    successMessage.classList.remove("show");
    errorMessage.classList.add("show");
  }
});

// gide messages on click anywhere
document.addEventListener("click", () => {
  successMessage.classList.remove("show");
  errorMessage.classList.remove("show");
});
