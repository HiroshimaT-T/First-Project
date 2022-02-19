import hamburgerMenu from "./menu-hamburguesa.js";

const d = document;
d.addEventListener("DOMContentLoaded", (e) => {
    hamburgerMenu(".panel-btn" , ".header-nav__container-list-desactibe" , ".header-nav-link__items");
});
