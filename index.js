const inputs = document.querySelectorAll(".form-control__input");
const emailAddress = document.querySelector(".email-address");
const form = document.querySelector(".form");

inputs.forEach((input) => {
  input.addEventListener("invalid", (e) => {
    e.preventDefault();

    const icon = input.nextElementSibling;
    const message = icon.nextElementSibling;

    input.classList.add("show-error--border");
    icon.classList.add("show-error");
    message.classList.add("show-error");
  });
});

inputs.forEach((input) => {
  input.addEventListener("keydown", () => {
    const icon = input.nextElementSibling;
    const message = icon.nextElementSibling;

    input.classList.remove("show-error--border");
    icon.classList.remove("show-error");
    message.classList.remove("show-error");
  });
});
