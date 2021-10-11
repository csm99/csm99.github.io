$(function () {

    $('.header').hide();
    $('.header-movil').hide();

    $('.btn-sobre-mi').on('click', function () {
        $('.btn-menu').removeClass('open');
        $('#menu').removeClass('open');
        $('#nav-icon3').removeClass('open');
        setTimeout(function () {
            $('html, body').animate({
                scrollTop: $("#sobre-mi").offset().top,
            }, 750, 'swing');
        }, 500);
    });

    $('.btn-experiencia').on('click', function () {
        $('.btn-menu').removeClass('open');
        $('#menu').removeClass('open');
        $('#nav-icon3').removeClass('open');
        setTimeout(function () {
            $('html, body').animate({
                scrollTop: $("#experiencia").offset().top,
            }, 750, 'swing');
        }, 500);
    });

    $('.btn-formacion').on('click', function () {
        $('.btn-menu').removeClass('open');
        $('#menu').removeClass('open');
        $('#nav-icon3').removeClass('open');
        setTimeout(function () {
            $('html, body').animate({
                scrollTop: $("#formacion").offset().top,
            }, 750, 'swing');
        }, 500);
    });

    $('.btn-contacto').on('click', function () {
        $('.btn-menu').removeClass('open');
        $('#menu').removeClass('open');
        $('#nav-icon3').removeClass('open');
        setTimeout(function () {
            $('html, body').animate({
                scrollTop: $("#contacto").offset().top,
            }, 750, 'swing');
        }, 500);
    });

    if (window.matchMedia('(min-device-width: 425px)').matches){
        $(window).scroll(function () {
            if ($(this).scrollTop()/$("#sobre-mi").offset().top <= 0){
                $('.header').hide();
            } else {
                $('.header').show();
            }
            $('.header').css({'opacity': $(this).scrollTop()/$("#sobre-mi").offset().top});
        });
    } else {
        $(window).scroll(function () {
            if ($(this).scrollTop()/$("#sobre-mi").offset().top <= 0){
                $('.header-movil').hide();
            } else {
                $('.header-movil').show();
            }
            $('.header-movil').css({'opacity': $(this).scrollTop()/$("#sobre-mi").offset().top});
        });
    }


    $('#nav-icon3').click(function(){
        $(this).toggleClass('open');
        $('#menu').toggleClass('open');
        $('.btn-menu').toggleClass('open');
    });
});
