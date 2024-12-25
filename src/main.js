const body = document.querySelector("body");
const sidebar = body.querySelector(".expandedSideBar");
const toggle = body.querySelector(".toggle");
const btn = body.querySelector(".button");
const logo = document.getElementById("logo");
const sun = document.querySelector(".sun");
const moon = document.querySelector(".moon");
const themeName = document.querySelector(".themeName");
// Load saved state from localStorage
if (localStorage.getItem("darkMode") === "true") {
  body.classList.add("dark");
  logo.src = "images/light.svg";
  moon.style.display = "none";
  sun.style.display = "flex";
  themeName.innerText = "Light Mode";
} else {
  logo.src = "images/logo.svg";
  moon.style.display = "flex";
  sun.style.display = "none";
  themeName.innerText = "Dark Mode";
}
if (localStorage.getItem("sidebarClosed") === "true") {
  sidebar.classList.add("close");
}

// Toggle dark mode and save state to localStorage
toggle.addEventListener("click", () => {
  body.classList.toggle("dark");
  if (body.classList.contains("dark")) {
    logo.src = "images/light.svg";
    moon.style.display = "none";
    sun.style.display = "flex";
    themeName.innerText = "Light Mode";
  } else {
    logo.src = "images/logo.svg";
    moon.style.display = "flex";
    sun.style.display = "none";
    themeName.innerText = "Dark Mode";
  }
  localStorage.setItem("darkMode", body.classList.contains("dark"));
});

// Toggle sidebar and save state to localStorage
btn.addEventListener("click", () => {
  sidebar.classList.toggle("close");
  localStorage.setItem("sidebarClosed", sidebar.classList.contains("close"));
});
