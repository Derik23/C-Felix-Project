const form = document.getElementById("form");
const nam = document.getElementById("name");
const email = document.getElementById("email");
const message = document.getElementById("message");

form.addEventListener("submit", function () {
  setTimeout(function () {
    nam.value = "";
    email.value = "";
    message.value = "";
  }, 500);
  document.getElementById("btnSubmit").innerText = "ENVIADO";
});
