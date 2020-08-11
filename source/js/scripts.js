// Шапка
let header = document.querySelector(".header");
let btnHeaderToggle = document.querySelector(".header__btn-toggle");

btnHeaderToggle.addEventListener("click", function() {
  header.classList.toggle("header--opened");
});
