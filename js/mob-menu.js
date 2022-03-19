(() => {
  const refs = {
    openMenuBtn: document.querySelector(".menu__btn"),
    closeMenuBtn: document.querySelector(".menu-close__btn"),
    menu: document.querySelector(".menu__container"),
  };

  refs.openMenuBtn.addEventListener("click", toggleMenu);
  refs.closeMenuBtn.addEventListener("click", toggleMenu);

  function toggleMenu() {
    // document.body.classList.toggle("modal-open");
    refs.menu.classList.toggle("is-hidden");
  }
})();