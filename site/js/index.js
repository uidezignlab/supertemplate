

$(document).ready(function () {
    $('.custom1').owlCarousel({
        animateOut: 'zoomOutLeft',
        animateIn: 'zoomInRight',
        items:1,
        margin:0,
        stagePadding:0,
        smartSpeed:450,
        autoplay: true,
        loop: true
    });
    $('.custom2').owlCarousel({
        stagePadding:0,
        smartSpeed:450,
        autoplay: true,
        loop:true,
        margin:10,
        responsiveClass:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    });

    $('.our-work .owl-carousel').owlCarousel({
        stagePadding: 180,
        loop:true,
        margin:20,
        nav:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:3
            }
        }
    });

    $('.anim .team-m-img').hover(function () {
        $(this).addClass('bounce')
    }, function () {
        $(this).removeClass('bounce')
    });

    $('.price-sw-btn').click(function (e) {
        e.preventDefault();
        var _th = $(this);
        $('.price-sw-btn').toggleClass('btn-shadow background-white');
        _th.addClass('btn-shadow background-white');
        $('.p-price').each(function () {
            var _this = $(this);
            if(_th.is($('.price-sw-btn:first-child'))){
                _this.text(parseInt(_this.data('p')) * 16);
            }else {
                _this.text(parseInt(_this.data('p')) * 36);
            }
        })
    });

    $('.sign-wrapper').css({
        width: window.innerWidth,
        height: window.innerHeight
    });

    $('.f-404').css({
        width: window.innerWidth,
        height: window.innerHeight
    });

    $(window).resize(function () {
        $('.sign-wrapper').css({
            width: window.innerWidth,
            height: window.innerHeight
        });
    });
    $(window).resize(function () {
        $('.f-404').css({
            width: window.innerWidth,
            height: window.innerHeight
        });
    });

});