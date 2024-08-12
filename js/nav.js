const nav = document.getElementById("header-nav");

const carrerNavLink = document.getElementById("nav-link-career");
const careerSection = document.getElementById("career-section");

const projecysNavLink = document.getElementById("nav-link-projects");
const projectsSection = document.getElementById("projects-section");

const navLogoLink = document.getElementById("nav-logo");
const topOfPage = document.getElementById("header-nav");

const isIndexPage = window.location.pathname === "/" || window.location.pathname.endsWith("index.html");

/* ADD A SHADOW WHEN USER SCROLL */
const addShadowToHeader = () => {
  if (window.scrollY > 110) {
    nav.classList.add("box-shadow-header");
  } else {
    nav.classList.remove("box-shadow-header");
  }
};

/* EVENT LISTENER TO SEE IF USER SCROLL */
window.addEventListener("scroll", addShadowToHeader);

/* SCROLL TO SPECIFIC SECTION FUNCTIONS */
const scrollToSection = (section) => {
  section.scrollIntoView({ behavior: "smooth" });
};

/* SCROLL TO TOP OF PAGE */
const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

const redirectAndScrollToSection = (section) => {
  window.location.href = "../index.html" + section;
};

/* CHECK ON WHAT PAGE THE USER IS FOR REDIRECTION AND SCROLL */
if (isIndexPage) {
  /* SCROLL TO CAREER SECTION */
  carrerNavLink.addEventListener("click", (event) => {
    event.preventDefault();
    scrollToSection(careerSection);
  });

  /* SCROLL TO PROJECTS SECTION */
  projecysNavLink.addEventListener("click", (event) => {
    event.preventDefault();
    scrollToSection(projectsSection);
  });

  navLogoLink.addEventListener("click", (event) => {
    event.preventDefault();
    scrollToTop();
  });
} else {

  /* SCROLL TO CAREER SECTION */
  carrerNavLink.addEventListener("click", (event) => {
    event.preventDefault();
    redirectAndScrollToSection("#career-section");
  });

  /* SCROLL TO PROJECTS SECTION */
  projecysNavLink.addEventListener("click", (event) => {
    event.preventDefault();
    redirectAndScrollToSection("#projects-section");
  });

  navLogoLink.addEventListener("click", (event) => {
    event.preventDefault();
    redirectAndScrollToSection("");
  });
}

