// ---------------------------- NAVBAR -------------------------------//

let navLinks = document.querySelectorAll(".nav-link");
let navRegister = document.querySelector(".register-border");
let navbar = document.querySelector(".navbar");
let darkEffect = document.querySelector(".dark-effect");

navRegister.addEventListener("mouseover", function (register) {
  let navBtnIcon = register.currentTarget.firstElementChild.firstElementChild;
  navBtnIcon.classList.replace("fa-chevron-down", "fa-chevron-up");
});

navRegister.addEventListener("mouseout", function (register) {
  let navBtnIcon = register.currentTarget.firstElementChild.firstElementChild;
  navBtnIcon.classList.replace("fa-chevron-up", "fa-chevron-down");
});

navLinks.forEach(function (links) {
  links.addEventListener("mouseover", function (curr) {
    let navLinkIcon = curr.currentTarget.firstElementChild.firstElementChild;
    navLinkIcon.classList.replace("fa-chevron-down", "fa-chevron-up");
    navbar.classList.add("remove-shaddow");
    darkEffect.classList.remove("hide");
    document.body.classList.add("no-scroll");
  });
});
navLinks.forEach(function (links) {
  links.addEventListener("mouseout", function (curr) {
    let navLinkIcon = curr.currentTarget.firstElementChild.firstElementChild;
    navLinkIcon.classList.replace("fa-chevron-up", "fa-chevron-down");
    navbar.classList.remove("remove-shaddow");
    darkEffect.classList.add("hide");
    document.body.classList.remove("no-scroll");
  });
});

// TOGGLE-NAVBAR

let toggleBtn = document.querySelector(".nav-toggle");
let toggleNavbar = document.querySelector(".toggle-navbar");
let toggleXmark = document.querySelector(".toggle-xmark");

toggleBtn.addEventListener("click", function () {
  toggleNavbar.classList.remove("nav-toggle-hide");
  darkEffect.classList.remove("hide");
  document.body.classList.add("no-scroll");
});

darkEffect.addEventListener("click", function () {
  closeNavbar();
});

toggleXmark.addEventListener("click", function () {
  closeNavbar();
});

function closeNavbar() {
  toggleNavbar.classList.add("nav-toggle-hide");
  darkEffect.classList.add("hide");
  document.body.classList.remove("no-scroll");
}

// ---------------------------- SLIDER -------------------------------//

let slider = [
  {
    title: "Fresher Internships",
    headline: "Apply to premium fresher Internships",
    benifitOne: "Compatitive stipend",
    benifitTwo: "100% Verified",
    img: "assets/home-page/slider-png/internship.png",
  },
  {
    title: "Fresher Jobs",
    headline: "Apply to premium fresher Jobs",
    benifitOne: "Compatitive Salery",
    benifitTwo: "100% Verified",
    img: "assets/home-page/slider-png/job.png",
  },
  {
    title: "Certificate",
    headline: "Offered by Internshala",
    benifitOne: "Gaurantee job",
    benifitTwo: "100% Verified",
    img: "assets/home-page/slider-png/certificate.png",
  },
];

let title = document.querySelector(".title");
let headline = document.querySelector(".headline");
let benifitOne = document.querySelector(".benifit-1");
let benifitTwo = document.querySelector(".benifit-2");
let sliderImg = document.querySelector(".slide-img");
let sliderNext = document.querySelector(".slider-next");
let sliderPrev = document.querySelector(".slider-prev");
let sliderCover = document.querySelector(".slider-cover");

window.addEventListener("DOMContentLoaded", function () {
  sliderSum(0);
});

let slide = 1;

function autoSlider() {
  sliderSum(slide);

  slide++;

  if (slide > 2) {
    slide = 0;
  }
}

let sliderId = setInterval(autoSlider, 3000);

sliderCover.addEventListener("mouseover", function () {
  clearInterval(sliderId);
});
sliderCover.addEventListener("mouseout", function () {
  sliderId = setInterval(autoSlider, 3000);
});

sliderNext.addEventListener("click", function () {
  sliderSum(slide);

  slide++;

  if (slide > 2) {
    slide = 0;
  }
});

sliderPrev.addEventListener("click", function () {
  sliderSum(slide);

  slide--;

  if (slide < 0) {
    slide = 2;
  }
});

function sliderSum(index) {
  title.textContent = slider[index].title;
  headline.textContent = slider[index].headline;
  benifitOne.textContent = slider[index].benifitOne;
  benifitTwo.textContent = slider[index].benifitTwo;
  sliderImg.src = slider[index].img;
}

// ---------------------------- FOOTER -------------------------------//

let fixedDate = document.querySelector(".copyright-year");
let autoDate = new Date().getFullYear();
console.log(autoDate);
fixedDate.textContent = autoDate;
