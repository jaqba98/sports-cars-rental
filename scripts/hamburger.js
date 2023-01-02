const hamburgerEL = document.getElementById("hamburger");
const topNavEL = document.getElementById("top-nav");

hamburgerEL.addEventListener("click", () => {
  topNavEL.classList.toggle("top-nav-open");
});
