const threeLines = document.querySelector("#three-lines");
const menu = document.querySelector("#menu");

threeLines.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});
