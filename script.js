function toggleMenu() {
  const menu = document.getElementById("menu");
  menu.style.display = menu.style.display === "block" ? "none" : "block";
}
// Existing toggleMenu function
function toggleMenu() {
  const menu = document.getElementById("menu");
  menu.style.display = menu.style.display === "block" ? "none" : "block";
}

// Fade in on load
window.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("fade-in");

  // Fade out when clicking navigation links
  const navLinks = document.querySelectorAll("a[href$='.html']");
  navLinks.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const href = link.getAttribute("href");

      document.body.classList.remove("fade-in");
      document.body.style.opacity = 0;

      setTimeout(() => {
        window.location.href = href;
      }, 500); // Match CSS transition time
    });
  });
});
window.addEventListener("load", () => {
  const popup = document.getElementById("brochure-popup");

  // Check if the popup has already been shown in this session
  const hasSeenPopup = sessionStorage.getItem("hasSeenPopup");

  if (!hasSeenPopup && popup) {
    popup.style.display = "flex";
    sessionStorage.setItem("hasSeenPopup", "true");
  }
});

function closePopup() {
  const popup = document.getElementById("brochure-popup");
  if (popup) {
    popup.style.display = "none";
  }
}
