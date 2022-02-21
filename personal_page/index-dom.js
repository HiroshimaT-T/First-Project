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
(function(){
    const sliders = [...document.querySelectorAll('.slider__body')];
    const arrowAftert = document.querySelector('#after');
    const arrowBefore = document.querySelector('#before');
    let value

    arrowAftert.addEventListener('click', () => changePosition(1));
    arrowBefore.addEventListener('click', () => changePosition(-1));

    function changePosition(change) {
        const currentElememt = Number(document.querySelector('.slider__body--show').dataset.id);
        
        value = currentElememt;
        value += change;
        console.log(sliders.length);
        if(value === 0 || value == sliders.length+1){
            value = value === 0 ? sliders.length : 1;
        };
        sliders[currentElememt-1].classList.toggle('slider__body--show');
        sliders[value-1].classList.toggle('slider__body--show');
    
    
    };
})()