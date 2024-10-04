const hamb = document.querySelector(".hamburger");
const mobile = document.querySelector(".mobile");

hamb.addEventListener("click", () => {
  if (mobile.classList.contains("hidden")) {
    mobile.classList.remove("hidden");
  } else {
    mobile.classList.add("hidden");
  }
});
