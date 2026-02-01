// ==============
// MOBILE NAV
// ==============
const nav = document.querySelector(".nav");
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });

  // Close mobile nav when a link is clicked
  navLinks.addEventListener("click", (event) => {
    if (event.target.tagName.toLowerCase() === "a") {
      nav.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    }
  });
}

// ==============
// OPTIONAL: ADD SMALL SHADOW ON SCROLL
// (Keeps it subtle and classy)
// ==============
const handleScrollShadow = () => {
  if (window.scrollY > 4) {
    nav.classList.add("nav-scrolled");
  } else {
    nav.classList.remove("nav-scrolled");
  }
};

window.addEventListener("scroll", handleScrollShadow);
handleScrollShadow();
