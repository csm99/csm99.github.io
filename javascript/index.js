$(function () {

    $('.header').hide();
    $('.header-movil').hide();

    let secciones = [];
    let seccionesBottom = [];
    secciones.push(0);
    secciones.push($("#sobre-mi").offset().top);
    secciones.push($("#experiencia").offset().top);
    secciones.push($("#formacion").offset().top);
    secciones.push($("#contacto").offset().top);

    seccionesBottom.push($("#sobre-mi").offset().top);
    seccionesBottom.push($("#experiencia").offset().top);
    seccionesBottom.push($("#formacion").offset().top);
    seccionesBottom.push($("#contacto").offset().top);

    $('.btn-sobre-mi').on('click', function () {
        i = 1;
        doScroll($("#sobre-mi").offset().top);
    });

    $('.btn-experiencia').on('click', function () {
        i = 2;
        doScroll($("#experiencia").offset().top);
    });

    $('.btn-formacion').on('click', function () {
        i = 3;
        doScroll($("#formacion").offset().top);
    });

    $('.btn-contacto').on('click', function () {
        i = 4;
        doScroll($("#contacto").offset().top);
    });

    $('.inicio').on('click', function () {
        i = 0;
        doScroll(0);
    });


    let i = 0;
    let previousScroll = 0;


    $(window).scroll(function () {

        if (window.matchMedia('(min-device-width: 425px)').matches){
            if ($(this).scrollTop()/$("#sobre-mi").offset().top <= 0){
                $('.header').hide();
            } else {
                $('.header').show();
            }
            $('.header').css({'opacity': $(this).scrollTop()/$("#sobre-mi").offset().top});
        } else {
            if ($(this).scrollTop()/$("#sobre-mi").offset().top <= 0){
                $('.header-movil').hide();
            } else {
                $('.header-movil').show();
            }
            $('.header-movil').css({'opacity': $(this).scrollTop()/$("#sobre-mi").offset().top});
        }

        let scrollNow = $(this).scrollTop();
        let scrollBottom = $(this).scrollTop() + window.innerHeight;
        console.log(i, scrollNow, previousScroll);

        // if (scrollBottom - 200 > secciones[i + 1]){
        //     i++;
        //     if (previousScroll < scrollNow){
        //         doScroll(secciones[i]);
        //     }
        //
        // } else if (scrollNow + 50 <= secciones[i - 1]) {
        //     i--;
        // }

        //
        // if (scrollBottom - 50 > seccionesBottom[i]){
        //     i++;
        //     doScroll(secciones[i]);
        //     // if (scrollNow > previousScroll){
        //     //
        //     // }
        // } else if (scrollNow + 100 < secciones[i]){
        //     // if (secciones[0] <= scrollNow && scrollNow <= secciones[1]){
        //     //     i = 0;
        //     // } else if (secciones[1] <= scrollNow && scrollNow <= secciones[2]){
        //     //     i = 1;
        //     // } else if (secciones[2] <= scrollNow && scrollNow <= secciones[3]){
        //     //     i = 2;
        //     // } else if (secciones[3] <= scrollNow && scrollNow <= secciones[4]){
        //     //     i = 3;
        //     // } else if (secciones[4] <= scrollNow){
        //     //     i = 4;
        //     // }
        //     i--;
        // }

        previousScroll = scrollNow;

    });

    function doScroll(value){
        $('.btn-menu').removeClass('open');
        $('#menu').removeClass('open');
        $('#nav-icon3').removeClass('open');
        setTimeout(function () {
            $('html, body').animate({
                scrollTop: value,
            }, 750, 'swing');
        }, 500);
    }


    $('#nav-icon3').click(function(){
        $(this).toggleClass('open');
        $('#menu').toggleClass('open');
        $('.btn-menu').toggleClass('open');
    });



});


