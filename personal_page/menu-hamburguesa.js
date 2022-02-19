export default function hamburgerMenu(panelBtn, panel, meniLink) {
    const d = document;
    d.addEventListener("click", e => {
        if(e.target.matches(panelBtn) || e.target.matches(`${panelBtn} *`)){
            d.querySelector(panel).classList.toggle("header-nav__container-list-active");
            d.querySelector(panelBtn).classList.toggle("is-active");
        };
        if(e.target.matches(meniLink)) {
            d.querySelector(panel).classList.remove("header-nav__container-list-active");
            d.querySelector(panelBtn).classList.remove("is-active");
        };
    });
}