const hamburgerButton = document.querySelector('.header__burger');
const menu = document.querySelector('.header__list');
const cssClass = 'header__list--active';

hamburgerButton.addEventListener('click', function(event){
    if(menu.classList.contains(cssClass)){
        return;
    }
    menu.classList.add(cssClass);
    event.stopPropagation();
});

document.querySelector('body').addEventListener('click', function(){
    menu.classList.remove(cssClass);

});