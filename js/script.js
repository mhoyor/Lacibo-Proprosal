window.addEventListener("load", function () {
  // Animation on Scroll//
  AOS.init();
});

/*------ TYPING EFFECT ------ */
var typed = new Typed(".typing", {
  strings: ["Dine-In ?", "Take-out ?"],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true,
});

/*------------ LIGHT MODE -------*/
// Light Mode enabled, Website on dark mode by default//
var icon = document.getElementById("icon");

// saving the user preferred choice of last session to browser local storage//
if (localStorage.getItem("theme") == null) {
  localStorage.setItem("theme", "dark");
}

let localData = localStorage.getItem("theme");

if (localData == "Dark") {
  icon.src = "./images/dark theme icon/sun.png";
  document.body.classList.remove("light-theme");
} else if (localData == "light") {
  icon.src = "./images/dark theme icon/moon.png";
  document.body.classList.add("light-theme");
}
// Light mode toggles on click//
icon.onclick = function () {
  document.body.classList.toggle("light-theme");
  if (document.body.classList.contains("light-theme")) {
    icon.src = "./images/dark theme icon/moon.png";
    localStorage.setItem("theme", "light");
  } else {
    icon.src = "./images/dark theme icon/sun.png";
    localStorage.setItem("theme", "dark");
  }
};
/*----- toggle Navbar* -----*/
const navToggler = document.querySelector(".nav-toggler");
navToggler.addEventListener("click", toggleNav);

function toggleNav() {
  navToggler.classList.toggle("active");
  document.querySelector(".nav").classList.toggle("open");
}

// close nav when item clicked//
document.addEventListener("click", function (e) {
  if (e.target.closest(".nav-item")) {
    toggleNav();
  }
});

//Sticky navbar//
window.addEventListener("scroll", function () {
  if (this.pageYOffset > 60) {
    document.querySelector(".header").classList.add("sticky");
  } else {
    document.querySelector(".header").classList.remove("sticky");
  }
});

function loader() {
  document.querySelector(".loader-container").classList.add("fade-out");
}

function fadeOut() {
  setInterval(loader, 3000);
}

window.onload = fadeOut;

/*----------menu tabs -----------*/
const menuTabs = document.querySelector(".menu-tabs");
menuTabs.addEventListener("click", function (e) {
  if (
    e.target.classList.contains("menu-tab-item") &&
    !e.target.classList.contains("active")
  ) {
    const target = e.target.getAttribute("data-target");
    menuTabs.querySelector(".active").classList.remove("active");
    e.target.classList.add("active");
    const menuSection = document.querySelector(".menu-section");
    menuSection
      .querySelector(".menu-tab-content.active")
      .classList.remove("active");
    menuSection.querySelector(target).classList.add("active");
    //Animation on scroll
    AOS.init();
  }
});
