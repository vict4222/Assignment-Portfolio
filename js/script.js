"use strict";

const HTML = []; // global variables
let theme = localStorage.getItem("data-theme") ?? localStorage.setItem("data-theme", "light"); // default is light

// wait for the document to finish loading
window.addEventListener("DOMContentLoaded", init);

// initialize
function init() {
  HTML.switch = document.querySelector("#theme-toggle"); // theme toggle button
  HTML.switch.addEventListener("click", toggleThemes);
  document.documentElement.setAttribute("data-theme", theme === "light" ? "light" : "dark");

  HTML.burgerMenu = document.querySelector("#burger-menu"); // burger menu button
  HTML.navMenu = document.querySelector("#nav-items"); // nav menu
  HTML.nav = document.querySelector("nav"); // nav bar
  HTML.burgerMenu.addEventListener("click", toggleMenu);
}

// dark mode / light mode

// toggle between light and dark theme
function toggleThemes() {
  let theme = localStorage.getItem("data-theme");
  switch (theme) {
    case "dark":
      changeThemeToLight();
      break;

    case "light":
      changeThemeToDark();
      break;
  }
}

// change to light theme
function changeThemeToLight() {
  document.documentElement.setAttribute("data-theme", "light"); // set theme to light
  localStorage.setItem("data-theme", "light"); // save theme to local storage
  HTML.switch.dataset.toggle = "light";
}

// change to dark theme
function changeThemeToDark() {
  document.documentElement.setAttribute("data-theme", "dark"); // set theme to dark
  localStorage.setItem("data-theme", "dark"); // save theme to local storage
  HTML.switch.dataset.toggle = "dark";
}

// burger menu

// open and close burger menu
function toggleMenu() {
  if (HTML.nav.classList.contains("active")) {
    HTML.nav.classList.remove("active");
    HTML.burgerMenu.textContent = "☰";
  } else {
    HTML.nav.classList.add("active");
    HTML.burgerMenu.textContent = "×";
  }
}
