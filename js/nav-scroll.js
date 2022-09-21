$(document).ready(() => {
    let buttonOpenS = $('.nav-scroll__button');
    let buttonCloseS = $('.nav-mobile__button-close1');
    let navMobile = $('.nav-mobile');
    let body = $('body');
    $('.nav-items>a').clone().appendTo( $('.nav-scroll__items') );

    $(window).on("scroll", () => {
        if( $(window).scrollTop() > 150 ){
            $('.nav-scroll').addClass('active');
        } else{
            $('.nav-scroll').removeClass('active');
        }
    });

    buttonOpenS.click(() => {
        buttonOpenS.addClass('active')
        navMobile.addClass('active');
        setTimeout(() => { 
            $('.nav-mobile__cont').addClass('active');
        }, 400);
        body.addClass('fixed');
    });

    buttonCloseS.click(() => {
        buttonOpenS.removeClass('active')
        $('.nav-mobile__cont').removeClass('active');
        setTimeout(() => { 
            navMobile.removeClass('active');
        }, 200);
        body.removeClass('fixed');
    });
});