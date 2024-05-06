function burgerOpen() {
  let burgerMenu = document.querySelector(".burger__menu");
  burgerMenu.style.display = "flex";
}
function burgerClose() {
  let burgerMenu = document.querySelector(".burger__menu");
  burgerMenu.style.display = "none";
  let screenWidth = window.innerWidth;
  if (screenWidth > 1024) {
  }
}
window.addEventListener("resize", function () {
  burgerClose();
});
