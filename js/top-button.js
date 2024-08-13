document.addEventListener("DOMContentLoaded", () => {
  /* ELEMENTS */
  const topButton = document.getElementById("top-button");

  /* TOGGLE DISPLAY TOP BUTTON */
  const toggleTopButton = () => {
    if (window.scrollY > 750) {
      topButton.classList.add("visible");
    } else {
      topButton.classList.remove("visible");
    }
  };

  /* CHECK POSITION FROM USER WHEN PAGE IS LOADED */
  toggleTopButton();

  /* SHOW BUTTON WHEN USER SCROLL IN THE PAGE */
  window.addEventListener("scroll", toggleTopButton);

  /* GO TO TOP IF USER CLICK ON TOP BUTTON */
  topButton.addEventListener("click", () => {
    if (topButton.classList.contains("visible")) {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }
  });
});