import hamburgerMenu from "./menu-hamburguesa.js";
const d = document;
d.addEventListener("DOMContentLoaded", (e) => {
    hamburgerMenu(".panel-btn" , ".header-nav__container-list-desactibe" , ".header-nav-link__items");
});
window.onscroll = function scrollHeader() {
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
})();

function lluviaFontAwesome() {
    let cantidadFA = 30
    let i = 0
    let sectionExperence = document.querySelector('.experiencia-container-moster');
    while(i < cantidadFA) {
        let iMosterElemtent = document.createElement('i');
        iMosterElemtent.classList.add('fa' , 'fa-alien-monster');
        let fontMoster = Math.random() * 5;
        let posX = Math.random() * (window.innerWidth - 72);
        let duration = Math.random() * 5 ;
     
        // iMosterElemtent.style.fontSize =  fontMoster + 20 + 'px';
        iMosterElemtent.style.left = posX  + 'px';
        iMosterElemtent.style.animationDuration = duration + 7 +'s';
     
        sectionExperence.appendChild(iMosterElemtent); 
        i++
    };
};
lluviaFontAwesome();


let linkExperiencia = document.querySelectorAll('.experiencia__experiences-box');

linkExperiencia.forEach( (linksExperiencias , linkExperienciaIndex) => {
    linksExperiencias.addEventListener('click' , () => {
       let textExperiencia = document.querySelectorAll('.experiencia__experience');
       textExperiencia.forEach((textExperiencia , textsExperienciasIndex) => {
            if(textsExperienciasIndex === linkExperienciaIndex){
                return textExperiencia.classList.toggle('hidden');
            };
            textExperiencia.classList.add('hidden');
    });
    });
 
});
