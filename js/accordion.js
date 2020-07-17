const buttons = document.querySelectorAll(".section__btn");

const buttonClickHandler = (evt) => {
  for (let i = 0; i < buttons.length; i++) {
    if (evt.target === buttons[i]) {
      buttons[i].nextElementSibling.classList.toggle("catalog--hidden");
      buttons[i].classList.toggle("section__btn--opened");
    }
  }
};

buttons.forEach((item) => {
  item.addEventListener("click", buttonClickHandler);
});
