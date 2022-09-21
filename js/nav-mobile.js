$(document).ready(() => {
    let buttonOpen = $('.nav__mobile-button');
    let buttonClose = $('.nav-mobile__button-close');
    let navMobile = $('.nav-mobile');
    let body = $('body');
    $('.nav-items>a').clone().appendTo( $('.nav-mobile-items') );

    buttonOpen.click(() => {
        buttonOpen.addClass('active')
        navMobile.addClass('active');
        setTimeout(() => { 
            $('.nav-mobile__cont').addClass('active');
        }, 400);
        body.addClass('fixed');
    });

    buttonClose.click(() => {
        buttonOpen.removeClass('active')
        $('.nav-mobile__cont').removeClass('active');
        setTimeout(() => { 
            navMobile.removeClass('active');
        }, 200);
        body.removeClass('fixed');
    });
});