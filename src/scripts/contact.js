const thanksMsg = document.querySelector("#contact .hidden");
const form = document.querySelector("#contact form");
document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  thanksMsg.classList.remove("hidden");
  form.classList.add("hidden");
});