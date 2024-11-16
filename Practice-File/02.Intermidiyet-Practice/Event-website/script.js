// Countdown and Form Validation (scripts.js)

// Countdown Timer
const countdownDate = new Date("2024-12-25T00:00:00").getTime();
const countdownElement = document.getElementById("countdown");

function updateCountdown() {
  const now = new Date().getTime();
  const distance = countdownDate - now;

  if (distance < 0) {
    clearInterval(countdownInterval);
    countdownElement.innerText = "Event Started!";
  }
}

const countdownInterval = setInterval(updateCountdown, 1000);

// Form Validation
const form = document.getElementById("registration-form");
const feedback = document.getElementById("form-feedback");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  feedback.textContent = "Thank you for registering!";
  feedback.style.color = "green";
});
