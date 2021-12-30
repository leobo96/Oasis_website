"use strict";

let navbar = document.querySelector("header");
let navlinks = document.querySelectorAll(".navbar-nav .nav-link");
let logo = document.getElementById("logo");

window.addEventListener("scroll", (e) => {
  e.preventDefault();

  if (window.scrollY >= 100) {
    navbar.classList.add("navbar-light", "bg-light");
    navbar.classList.remove("navbar-dark", "bg-transparent");
    logo.src = "./img/LogoPink.svg";
    navlinks.forEach((el) => el.classList.add("solid"));
  } else {
    navbar.classList.remove("navbar-light", "bg-light");
    navbar.classList.add("navbar-dark", "bg-transparent");
    logo.src = "./img/LogoWhite.svg";
    navlinks.forEach((el) => el.classList.remove("solid"));
  }
});

// let logo = [
//   document.querySelector(".logo #smile"),
//   ...document.querySelectorAll(".logo path:not(#smile)"),
// ];

// logo.forEach((el) => el.classList.add("solid"));
// logo.forEach((el) => el.classList.remove("solid"));