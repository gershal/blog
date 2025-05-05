// Dynamic Copyright Year
document.getElementById("copyright-year").textContent = new Date().getFullYear();

// Dark/Light Mode Toggle
const themeToggle = document.getElementById("theme-toggle");
const html = document.documentElement;

themeToggle.addEventListener("click", () => {
  html.classList.toggle("dark");
  localStorage.setItem("theme", html.classList.contains("dark") ? "dark" : "light");
});

// Check for saved theme preference
if (localStorage.getItem("theme") === "dark") {
  html.classList.add("dark");
}
