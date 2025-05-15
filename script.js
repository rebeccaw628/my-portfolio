const btn = document.querySelector(".navbar__btn");
const menu = document.querySelector(".navbar__text");
let isHidden = true;

const displayMenu = () => {
  if (isHidden) {
    isHidden = false;
    menu.classList.remove("toggle");
  } else {
    isHidden = true;
    menu.classList.add("toggle");
  }
};

btn.addEventListener("click", displayMenu);
