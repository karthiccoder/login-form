const form = document.getElementById("loginForm");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const toggleBtn = document.getElementById("togglePassword");
const message = document.getElementById("message");
const VALID_EMAIL = "test@example.com";
const VALID_PASSWORD = "123456";
toggleBtn.addEventListener("click", function () {
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    toggleBtn.textContent = "Hide";
  } else {
    passwordInput.type = "password";
    toggleBtn.textContent = "Show";
  }
});
function showMessage(text, type) {
  message.textContent = text;
  message.className = "message " + type;
}
function isValidEmail(email) {
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return pattern.test(email);
}
form.addEventListener("submit", function (event) {
  event.preventDefault(); 
  const email = emailInput.value.trim();
  const password = passwordInput.value;
  if (email === "" || password === "") {
    showMessage("Please fill in both fields.", "error");
    return;
  }
  if (!isValidEmail(email)) {
    showMessage("Please enter a valid email address.", "error");
    return;
  }
  if (password.length < 6) {
    showMessage("Password must be at least 6 characters.", "error");
    return;
  }
  if (email === VALID_EMAIL && password === VALID_PASSWORD) {
    showMessage("Login successful! Redirecting...", "success");
  } else {
    showMessage("Invalid email or password.", "error");
  }
});