(function ($) {
    $(document).ready(function () {
        $(window).on('scroll',function() {
            //sticky menu when scroll
            var scroll = $(window).scrollTop();
            if (scroll < 1) {
                $(".header-section").removeClass("sticky_menu");
            }else{
                $(".header-section").addClass("sticky_menu");
            }
        });
        //mobile menu custom js
        $(".mobile-home-btn").on("click", function () {
            $("html").animate({
                scrollTop: 0
            }, 800);
        });
        $(".mobile-menu-btn").on("click", function () {
            $('ul.mobile-menu').css({
                'bottom': '50px',
                'opacity': '1',
                'transition': 'all .5s'
            });
        });
        $("#close").on("click", function () {
            $('ul.mobile-menu').css({
                'bottom': '-100%',
                'opacity': '0',
                'transition': 'all .8s'
            });
        });
        $("ul.mobile-menu li a").on("click", function () {
            $('ul.mobile-menu').css({
                'bottom': '-100%',
                'opacity': '0',
                'transition': 'all .8s'
            });
        });

        //hero slider
        $('#hero-slider').owlCarousel({
            slideTransition: 'linear',
            navSpeed: 2000,
            loop: true,
            margin: 0,
            autoplay: true,
            autoplayTimeout: 7000,
            autoplayHoverPause: false,
            autoplaySpeed: 2000,
            responsiveClass: true,
            nav: true,
            dots: false,
            mouseDrag: false,
            touchDrag: false,
            responsive: {
                0: {
                    items: 1,
                    nav: true
                },
                600: {
                    items: 1,
                    nav: true
                },
                1000: {
                    items: 1,
                    nav: true,
                    loop: true
                }
            }
        });
        //slider animation
        $('#hero-slider').on('translate.owl.carousel', function () {
            $('.slide-thumb img').css({
                '-webkit-transform': 'scale(1)',
                '-moz-transform': 'scale(1)',
                '-ms-transform': 'scale(1)',
                '-o-transform': 'scale(1)',
                'transform': 'scale(1)',
                '-webkit-transition': 'all 3s',
                '-moz-transition': 'all 3s',
                '-ms-transition': 'all 3s',
                '-o-transition': 'all 3s',
                'transition': 'all 3s'
            });
            /*$('.slide-content h1, .slide-content h2, .slide-content p, .slider-btn a').removeClass('animated fadeInUp').css('opacity', '0');*/
        });
        $('#hero-slider').on('translated.owl.carousel', function () {
            $('.slide-thumb img').css({
                '-webkit-transform': 'scale(1.3)',
                '-moz-transform': 'scale(1.3)',
                '-ms-transform': 'scale(1.3)',
                '-o-transform': 'scale(1.3)',
                'transform': 'scale(1.3)',
                '-webkit-transition': 'all 3s',
                '-moz-transition': 'all 3s',
                '-ms-transition': 'all 3s',
                '-o-transition': 'all 3s',
                'transition': 'all 3s'
            });
            /*$('.slide-content h1, .slide-content h2, .slide-content p, .slider-btn a').addClass('animated fadeInUp').css('opacity', '1');*/
        });


        //back to top show when scroll
        $(".back_to_top i.fa").css("display", "none");
        $(window).on('scroll', function () {
            var scroll = $(window).scrollTop();
            if (scroll < 300) {
                $(".back_to_top i.fa").css("display", "none");
            } else {
                $(".back_to_top i.fa").css("display", "block");
            }
        });
        $(".back_to_top i.fa").on("click", function () {
            $("html").animate({
                scrollTop: 0
            }, 800);
        });
        //WoW js activation
        new WOW().init();
    });

    /*gallery area*/
    $('#gallery_filter').mixItUp();

    /*magnific popup*/
    $('.single-image').magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
            enabled: true
        }
    });
})(jQuery);