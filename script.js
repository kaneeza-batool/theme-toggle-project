// ============================================================
//  Theme Toggle — script.js
// ============================================================

let dark = false;

function toggle() {
  dark = !dark;

  const page = document.getElementById("page");
  const sw = document.getElementById("sw");
  const iconWrap = document.getElementById("iconWrap");
  const heading = document.getElementById("heading");
  const sub = document.getElementById("sub");
  const badge = document.getElementById("badge");
  const lightLbl = document.getElementById("lightLbl");
  const darkLbl = document.getElementById("darkLbl");

  // Toggle dark class on page
  page.classList.toggle("dark", dark);

  // Toggle switch state
  sw.classList.toggle("on", dark);

  // Spin the icon
  iconWrap.classList.add("spinning");
  setTimeout(() => iconWrap.classList.remove("spinning"), 500);

  if (dark) {
    iconWrap.textContent = "🌙";
    heading.textContent = "Dark Mode";
    sub.textContent = "Sleek, elegant and easy on the eyes";
    badge.textContent = "● Dark mode active";
    lightLbl.classList.replace("active", "inactive");
    darkLbl.classList.replace("inactive", "active");
  } else {
    iconWrap.textContent = "☀️";
    heading.textContent = "Light Mode";
    sub.textContent = "Bright, clean and energetic";
    badge.textContent = "● Light mode active";
    lightLbl.classList.replace("inactive", "active");
    darkLbl.classList.replace("active", "inactive");
  }
}
