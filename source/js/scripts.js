// Шапка
let header = document.querySelector(".header");
let btnHeaderToggle = document.querySelector(".header__btn-toggle");

btnHeaderToggle.addEventListener("click", function() {
  header.classList.toggle("header--opened");
});

// Цены

let tablePrice = document.querySelector(".prices__table");
let btnPrice1 = document.querySelector(".prices__btn-price--1");
let btnPrice2 = document.querySelector(".prices__btn-price--2");
let btnPrice3 = document.querySelector(".prices__btn-price--3");

btnPrice1.addEventListener("click", function() {
  tablePrice.classList.remove("prices__table--slide-2");
  tablePrice.classList.remove("prices__table--slide-3");
  tablePrice.classList.add("prices__table--slide-1");
});

btnPrice2.addEventListener("click", function() {
  tablePrice.classList.remove("prices__table--slide-1");
  tablePrice.classList.remove("prices__table--slide-3");
  tablePrice.classList.add("prices__table--slide-2");
});

btnPrice3.addEventListener("click", function() {
  tablePrice.classList.remove("prices__table--slide-1");
  tablePrice.classList.remove("prices__table--slide-2");
  tablePrice.classList.add("prices__table--slide-3");
});
