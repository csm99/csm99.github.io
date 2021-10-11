$(function () {

    $('.btn-sobre-mi').on('click', function () {
        $('html, body').animate({
            scrollTop: $("#sobre-mi").offset().top,
        }, 750, 'swing');
    });

    $('.btn-experiencia').on('click', function () {
        $('html, body').animate({
            scrollTop: $("#experiencia").offset().top,
        }, 750, 'swing');
    });

    $('.btn-formacion').on('click', function () {
        $('html, body').animate({
            scrollTop: $("#formacion").offset().top,
        }, 750, 'swing');
    });

    $('.btn-contacto').on('click', function () {
        $('html, body').animate({
            scrollTop: $("#contacto").offset().top,
        }, 750, 'swing');
    });


    $(window).scroll(function () {
        if ($(this).scrollTop()/$("#sobre-mi").offset().top <= 0){
            $('.header').hide();
        } else {
            $('.header').show();
        }
        $('.header').css({'opacity': $(this).scrollTop()/$("#sobre-mi").offset().top});
    });
});
