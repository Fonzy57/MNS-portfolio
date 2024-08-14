const version = "1.0.1";

const yearDisplay = document.getElementById("footer-year");
const versionDisplay = document.getElementById("footer-version");

/* DISPLAY YEAR AND VERSION DYNAMICALLY */
document.addEventListener("DOMContentLoaded", function () {
  const currentYear = new Date().getFullYear();

  yearDisplay.textContent = currentYear;
  versionDisplay.textContent = version;
});