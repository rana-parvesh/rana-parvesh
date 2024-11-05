function updateClock() {
  const now = new Date();

  // Get hour, minute, second, and format for digital display
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  // Analog clock calculations
  const hourDegrees = (hours % 12) * 30 + minutes * 0.5; // 30 degrees per hour, 0.5 per minute
  const minuteDegrees = minutes * 6; // 6 degrees per minute
  const secondDegrees = seconds * 6; // 6 degrees per second

  // Apply rotation to hands
  document.getElementById(
    "hourHand"
  ).style.transform = `rotate(${hourDegrees}deg)`;
  document.getElementById(
    "minuteHand"
  ).style.transform = `rotate(${minuteDegrees}deg)`;
  document.getElementById(
    "secondHand"
  ).style.transform = `rotate(${secondDegrees}deg)`;

  // Digital clock display with AM/PM
  const formattedHours = hours % 12 === 0 ? 12 : hours % 12;
  const formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
  const formattedSeconds = seconds < 10 ? "0" + seconds : seconds;
  const ampm = hours >= 12 ? "PM" : "AM";

  // Set digital clock text
  document.getElementById(
    "digitalClock"
  ).textContent = `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
  document.getElementById("timePeriod").textContent = ampm;

  // Background color change based on time
  if (hours >= 18 || hours < 6) {
    document.body.style.backgroundColor = "#2C3E50"; // Dark background for night
  } else {
    document.body.style.backgroundColor = "#ECF0F1"; // Light background for day
  }
}

// Update clock every second
setInterval(updateClock, 1000);
updateClock();
