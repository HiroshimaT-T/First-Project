import hamburgerMenu from "./menu-hamburguesa.js";
const d = document;
d.addEventListener("DOMContentLoaded", (e) => {
    hamburgerMenu(".panel-btn" , ".header-nav__container-list-desactibe" , ".header-nav-link__items");
});

window.onscroll = function () {
    let scroll = document.documentElement.scrollTop;
    let header = document.getElementById("header");
    if (scroll > 64) {
        header.classList.add('header-md');
    } else if (scroll < 64) {
        header.classList.remove('header-md');
    };
};