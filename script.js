const btn = document.querySelector(".navbar__btn");
const menu = document.querySelector(".navbar__text");
let isHidden = true;

const displayMenu = () => {
  if (isHidden) {
    isHidden = false;
    menu.classList.remove("hidden");
  } else {
    isHidden = true;
    menu.classList.add("hidden");
  }
};

btn.addEventListener("click", displayMenu);
