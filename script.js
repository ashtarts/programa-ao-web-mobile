const nextButton = document.getElementById("next");
const boxElement = document.querySelector(".box");

nextButton.addEventListener("click", () => {
  scrollTo({
    top: boxElement.offsetTop,
    behavior: "smooth",
  });
});
