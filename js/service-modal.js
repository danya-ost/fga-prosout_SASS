$(document).ready(() => {
    let buttonOpenModal = $('.modalOpen');
    let buttonCloseModal = $('.view-service__modal-item__button');
    let modalBg = $('.view-service__modal');
    let modal = $('.view-service__modal-item');

    buttonOpenModal.click(() => {
        modalBg.addClass('active');
        setTimeout(() => { 
            modal.addClass('active') 
        } ,150);
    });

    buttonCloseModal.click(() => {
        modal.removeClass('active');
        setTimeout(() => { 
            modalBg.removeClass('active')
        } , 150);
    });
});