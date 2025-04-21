// Mobile menu toggle
const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

// Close mobile menu when clicking on a link
const navLinks = document.querySelectorAll("#mobile-menu a");
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.add("hidden");
  });
});

// Smooth scrolling for all links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Add glow effect to tech icons on hover
const techIcons = document.querySelectorAll(".tech-icon");
techIcons.forEach((icon) => {
  icon.addEventListener("mouseenter", () => {
    icon.classList.add("glow");
  });
  icon.addEventListener("mouseleave", () => {
    icon.classList.remove("glow");
  });
});
