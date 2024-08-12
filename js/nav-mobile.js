const burgerMenu = document.getElementById("burger-menu");
const burgerLines = document.querySelectorAll(".burger-menu-line");
const navList = document.getElementById("nav-list");
const navLinks = document.querySelectorAll(".nav-item");
const body = document.body;

/* OPEN AND CLOSE MENU */
const toggleMenu = () => {
  burgerLines.forEach((line) => {
    line.classList.toggle("menu-open");
  });
  burgerMenu.classList.toggle("menu-open");
  navList.classList.toggle("menu-open");
  body.classList.toggle("no-scroll");
  if (navList.classList.contains("menu-open")) {
  } else {
    body.classList.remove("no-scroll");

  }
};

burgerMenu.addEventListener("click", () => {
  toggleMenu();
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    /* CHECKING IF MENU IS OPEN */
    if (navList.classList.contains("menu-open")) {
      toggleMenu();
    }
  });
});
