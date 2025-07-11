// script.js
document.addEventListener("DOMContentLoaded", () => {
  function toggleMenu() {
    const navLinks = document.querySelector(".nav-links");
    navLinks.classList.toggle("open");
  }

  // Optional: Scroll animations when items appear in viewport
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
        }
      });
    },
    {
      threshold: 0.1,
    }
  );

  document
    .querySelectorAll(
      ".fade-in-up, .fade-in-delay, .slide-in-up, .slide-in-right, .zoom-in, .rotate-in, .scale-up"
    )
    .forEach((el) => {
      observer.observe(el);
    });
});
