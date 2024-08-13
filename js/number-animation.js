/* CONSTANTS */
const lignesOfCodeNumber = 7500;
const projectsNumber = 8;
const sitesDeployed = 5;

const formatNumber = (number) => {
  if (number >= 1000000) {
    return (number / 1000000).toFixed(1) + "M";
  } else if (number >= 1000) {
    return (number / 1000).toFixed(1) + "K";
  } else {
    return number.toFixed(0);
  }
};

const counterAnimation = (element, start, end, duration) => {
  const range = end - start;
  const increment = range / (duration / 16);
  let current = start;
  let stepTime = Math.abs(Math.floor(16));

  const timer = setInterval(() => {
    current += increment;
    if ((increment > 0 && current >= end) || (increment < 0 && current <= end)) {
      clearInterval(timer);
      current = end;
    }
    element.textContent = formatNumber(current);
  }, stepTime);
};

document.addEventListener("DOMContentLoaded", () => {
  const numbersBanner = document.getElementById("numbers-section");

  const triggerCounterAnimation = () => {
    if (numbersBanner.classList.contains("visible") && !numbersBanner.classList.contains("animated")) {
      numbersBanner.classList.add("animated"); // Prevents re-triggering the animation

      const lignesOfCodeDisplay = document.getElementById("number-code");
      const projectsDisplay = document.getElementById("number-projects");
      const siteDisplay = document.getElementById("number-site");

      // Don't animate the numbers if not on laptop or desktop
      if (window.innerWidth >= 1435) {
        counterAnimation(lignesOfCodeDisplay, 0, lignesOfCodeNumber, 2000);
        counterAnimation(projectsDisplay, 0, projectsNumber, 2000);
        counterAnimation(siteDisplay, 0, sitesDeployed, 2000);
      }
    }
  };

  // Check if the banner is already visible on loading page (in case of refresh)
  triggerCounterAnimation();

  // Bind to scroll and resize events t otrigger the animation
  window.addEventListener("scroll", triggerCounterAnimation);
  window.addEventListener("resize", triggerCounterAnimation);
});