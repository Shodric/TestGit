// Idea de @DevEd

const hamburguesa = document.querySelector(".hamburguesa");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburguesa.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  links.forEach((link) => {
    link.classList.toggle("fade");
  });
});

const anchor = document.querySelector(".nav-links");
const link = document.querySelector(".nav-links");

anchor.addEventListener("click", () => {
  link.classList.remove("open");
  links.forEach((link) => {
    link.classList.remove("fade");
  });
});

/* const hamburguesa = document.querySelector(".hamburguesa");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburguesa.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  links.forEach(link => {
    link.classList.toggle("fade");
  });
}); */
