const hamburgerEl = document.querySelector(".hamburger");
const topNavEl = document.querySelector(".top-nav");

hamburgerEl.addEventListener("click", () => {
  topNavEl.classList.toggle("top-nav-open");
});
