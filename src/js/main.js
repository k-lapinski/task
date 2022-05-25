let count = localStorage.getItem("count") || 0;
const popupQuerySelector = "#popup";
const popupEl = document.querySelector(popupQuerySelector);
const popupBttn = document.querySelector(".btnn");
const containerr = document.querySelector(".blackscreen");
const popupCounntaer = document.querySelector("h5");
const x = document.querySelector(".x");
const reset = document.querySelector(".reset");


x.addEventListener("click", () => {
  setTimeout(() => {
    if (popupEl.classList.contains("show") && containerr.classList.contains("show")) {
      containerr.classList.remove("show");
      popupEl.classList.remove("show");
      reset.classList.remove("show");
    }
  }, 250);

});

popupBttn.addEventListener("click", () => {
  count++;
  popupCounntaer.innerText = "\u00A0" + count + "  times\u00A0";
  localStorage.setItem("count", count);
  if (count > 5) {
    setTimeout(() => {
      reset.classList.add("show");
      reset.addEventListener("click", () => {
        count = 0;
        reset.classList.remove("show");
      });
    }, 255)
  }
  setTimeout(() => {
    if (!popupEl.classList.contains("show") && !containerr.classList.contains("show")) {
      containerr.classList.add("show");
      popupEl.classList.add("show");
    }
  }, 250);
});

document.addEventListener("click", (e) => {
  const isClosest = e.target.closest(popupQuerySelector);
  if (!isClosest && popupEl.classList.contains("show") && !isClosest && containerr.classList.contains("show")) {
    containerr.classList.remove("show");
    popupEl.classList.remove("show");
    reset.classList.remove("show");
  }
});