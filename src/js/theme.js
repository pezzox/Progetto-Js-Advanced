// theme.js
export function setupThemeToggle(toggleId = 'theme-toggle') {
  const toggleButton = document.getElementById(toggleId);
  const body = document.body;
  const savedTheme = localStorage.getItem("theme") || "light";

  if (savedTheme === "dark") {
    body.classList.add("dark-mode");
  }

  toggleButton?.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    const newTheme = body.classList.contains("dark-mode") ? "dark" : "light";
    localStorage.setItem("theme", newTheme);
  });
}
