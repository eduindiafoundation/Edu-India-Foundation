// Fade-in effect for sections on scroll
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".contact-card, .contact-form-section");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, { threshold: 0.1 });

  sections.forEach(section => {
    section.classList.add("fade-section");
    observer.observe(section);
  });
});

// Adding a 'visible' class to trigger fade-in animation
const style = document.createElement("style");
style.textContent = `
.fade-section {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}
.fade-section.visible {
  opacity: 1;
  transform: translateY(0);
}`;
document.head.appendChild(style);
