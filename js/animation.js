document.addEventListener("DOMContentLoaded", () => {

  /* FUNCTION TO SEE IF ELEMENT IS IN VIEWPORT */
  const isElementInViewport = (element) => {
    const rect = element.getBoundingClientRect();
    const elementHeight = rect.height;

    // Calculate the visible height of the element
    const visibleHeight = Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0);

    // If the element is smaller than 200px, it only needs to be visible in its entirety
    // Otherwise, at least 200px must be visible
    return visibleHeight >= 200 || visibleHeight >= elementHeight;
  };

  /* ADD CSS VISIBLE IF THE ELEMENT IS IN VIEWPORT */
  const showElement = () => {
    const elements = document.querySelectorAll(".fade-in");
    elements.forEach((element) => {
      if (isElementInViewport(element)) {
        element.classList.add("visible");
      }
    });
  };

  window.addEventListener("scroll", showElement);
  showElement();
});