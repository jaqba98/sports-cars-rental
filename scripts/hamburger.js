const hamburgerEL = document.getElementById("hamburger");
const topNavEL = document.getElementById("top-nav");

const toggleTopNav = () => topNavEL.classList.toggle("top-nav-open");

hamburgerEL.addEventListener("click", () => toggleTopNav());
