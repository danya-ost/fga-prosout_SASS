$(document).ready(() => {
    if( $('.bg').hasClass('bg-white') ){
        $('.nav__logo-item').attr('src', './image/logo/logo__color.png');
        $('.nav-items').addClass('color');
        $('.nav__mobile-button').addClass('color');
    }
});