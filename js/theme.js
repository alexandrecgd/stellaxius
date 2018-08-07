;
(function($) {
    "use strict";

    var nav_offset_top = $('header').height();
    /*-------------------------------------------------------------------------------
      Navbar Fixed   
    -------------------------------------------------------------------------------*/
    function navbarFixed() {
        if ($('.main_menu_area, .search_area').length) {
            $(window).scroll(function() {
                var scroll = $(window).scrollTop();
                if (scroll >= nav_offset_top) {
                    $(".main_menu_area, .search_area").addClass("navbar_fixed");
                } else {
                    $(".main_menu_area, .search_area").removeClass("navbar_fixed");
                }
            });
        };
    };
    /* Hamburguer menu animation */
    $('#nav-icon3').click(function(){
        $(this).toggleClass('open');
    });
    navbarFixed();


    function AnimateScroll() {
      // Box 1
      $('#img-fadeIn1').css('opacity', 0);
      $('#img-fadeIn1').waypoint(function() {
          $('#img-fadeIn1').addClass('fadeIn');
      }, { offset: '100%' });
      // Box 2
      $('#img-fadeIn2').css('opacity', 0);
      $('#img-fadeIn2').waypoint(function() {
          $('#img-fadeIn2').addClass('fadeIn');
      }, { offset: '100%' });
      // Box 3
      $('#img-fadeIn3').css('opacity', 0);
      $('#img-fadeIn3').waypoint(function() {
          $('#img-fadeIn3').addClass('fadeIn');
      }, { offset: '100%' });
      // Box 4
      $('#img-fadeIn4').css('opacity', 0);
      $('#img-fadeIn4').waypoint(function() {
          $('#img-fadeIn4').addClass('fadeIn');
      }, { offset: '100%' });

      // Image 1
      $('#img-fadeInRight').css('opacity', 0);
      $('#img-fadeInRight').waypoint(function() {
          $('#img-fadeInRight').addClass('fadeInRight');
      }, { offset: '90%' });
      // Image 2
      $('#img-fadeInLeft').css('opacity', 0);
      $('#img-fadeInLeft').waypoint(function() {
          $('#img-fadeInLeft').addClass('fadeInLeft');
      }, { offset: '90%' });
    };
    AnimateScroll();

    /*-------------------------------------------------------------------------------
      Block Scroll Body on Mobile Menu is open 
    -------------------------------------------------------------------------------*/
    function BlockBodyMenu() {
        var clicked = "false";
          
          $('.navbar-toggler').click(function(e) {
            e.preventDefault();
            var overflowState = 'auto'

            if (clicked == "false") {
            overflowState = 'hidden';
            clicked = "true";
            } else {
            overflowState = 'auto';
            clicked = "false";
            }
            $('html, body').css('overflow', overflowState);
        });
    };
    BlockBodyMenu();

    /*-------------------------------------------------------------------------------
      Fix Widget 
    -------------------------------------------------------------------------------*/
    function widgetFixed() {
        if ($('.r_cv_widget').length) {
            $(window).scroll(function() {
                var scroll = $(window).scrollTop();
                if (scroll > 447) {
                    $(".r_cv_widget").addClass("widget_fixed");
                } else {
                    $(".r_cv_widget").removeClass("widget_fixed");
                }
            });
        };



    };
    widgetFixed();

    /*----------------------------------------------------*/
    /*  Show Hide Empty State js
    /*----------------------------------------------------*/
    function cards() {
        if ($('#cards').text().trim().length == 0) {
            $('#cards').hide();
            $('#empty').show()
        } else {
            $('#cards').show();
            $('#empty').hide()
        }
    }
    cards();


    /*----------------------------------------------------*/
    /*  Main Slider js
    /*----------------------------------------------------*/
    function main_slider() {
        if ($('#main_slider').length) {
            $("#main_slider").revolution({
                sliderType: "standard",
                sliderLayout: "auto",
                delay: 500000,
                disableProgressBar: "on",
                navigation: {
                    onHoverStop: 'on',
                    touch: {
                        touchenabled: "on"
                    },
                    arrows: {
                        style: "zeus",
                        enable: false,
                        hide_onmobile: true,
                        hide_under: 820,
                        hide_onleave: true,
                        hide_delay: 200,
                        hide_delay_mobile: 1200,
                        tmp: '<div class="tp-title-wrap">   <div class="tp-arr-imgholder"></div> </div>',
                        left: {
                            h_align: "left",
                            v_align: "center",
                            h_offset: 5,
                            v_offset: 0
                        },
                        right: {
                            h_align: "right",
                            v_align: "center",
                            h_offset: 5,
                            v_offset: 0
                        }
                    },
                },
                responsiveLevels: [4096, 1320, 1199, 992, 767, 480],
                gridwidth: [1170, 1170, 960, 720, 700, 300],
                gridheight: [900, 900, 900, 800, 500, 500],
                lazyType: "smart",
                fallbacks: {
                    simplifyAll: "off",
                    nextSlideOnWindowFocus: "off",
                    disableFocusListener: false,
                }
            })
        }
    }
    main_slider();


    /*-------------------------------------------------------------------------------
      Smooth Scroll 
    -------------------------------------------------------------------------------*/
    function SmoothScroll() {
        $('a[href*="#"]')
            .not('[href="#"]')
            .not('[href="#0"]')
            .click(function(event) {
                if (
                    location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
                    location.hostname == this.hostname
                ) {
                    var target = $(this.hash);
                    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                    if (target.length) {
                        event.preventDefault();
                        $('html, body').animate({
                            scrollTop: target.offset().top
                        }, 1000, function() {
                            var $target = $(target);
                            $target.focus();
                            if ($target.is(":focus")) {
                                return false;
                            } else {
                                $target.attr('tabindex', '-1'); 
                                $target.focus(); 
                            };
                        });
                    }
                }
            });
    }
    SmoothScroll();

    /*-------------------------------------------------------------------------------
      Smooth Scroll Top
    -------------------------------------------------------------------------------*/
    function SmoothScrollTop() {
        $(window).scroll(function() {
            if ($(this).scrollTop() > 50) {
                $('.scrolltop:hidden').stop(true, true).fadeIn();
            } else {
                $('.scrolltop').stop(true, true).fadeOut();
            }
        });
        $(function() {
            $(".scroll").click(function() {
                $("html,body").animate({
                    scrollTop: $("#top").offset().top
                }, "1000");
                return false
            })
        })
    }
    SmoothScrollTop();

    /*----------------------------------------------------*/
    /*  Skill Slider
    /*----------------------------------------------------*/
    function progressBarConfig() {
        var progressBar = $('.progress');
        if (progressBar.length) {
            progressBar.each(function() {
                var Self = $(this);
                Self.appear(function() {
                    var progressValue = Self.data('value');

                    Self.find('.progress-bar').animate({
                        width: progressValue + '%'
                    }, 1000);

                    Self.find('.number').countTo({
                        from: 0,
                        to: progressValue,
                        speed: 1000,
                        refreshInterval: 50
                    });
                });
            })
        }
    }
    progressBarConfig();


    /*----------------------------------------------------*/
    /*  Parallax
    /*----------------------------------------------------*/
    if ($(window).width() > 992) {
        $('.service_area').parallax("50%", 0.4);
        $('.project_area').parallax("50%", 0.4);
    }

    /*----------------------------------------------------*/
    /*  Slider Testemunhos
    /*----------------------------------------------------*/
    function testimoninals_carousel() {
        if ($('.testimonials_slider').length) {
            $('.testimonials_slider').owlCarousel({
                loop: true,
                margin: 0,
                items: 1,
                nav: true,
                autoplay: true,
                autoplayHoverPause: true,
                smartSpeed: 1500,
                navContainer: '.testimonials_slider',
                navText: ['<i class="ti-angle-left" aria-hidden="true"></i>', '<i class="ti-angle-right" aria-hidden="true"></i>'],
            })
        }
    }
    testimoninals_carousel();

    /*----------------------------------------------------*/
    /*  Slider Clientes
    /*----------------------------------------------------*/
    function certifications_carousel() {
        $('.certifications_slider').owlCarousel({
            loop:true,
            margin:10,
            nav: true,
            autoplay: true,
            autoplayHoverPause: true,
            smartSpeed: 1500,
            responsiveClass:true,
            navContainer: '.certifications_slider',
            navText: ['<i class="ti-angle-left" aria-hidden="true"></i>', '<i class="ti-angle-right" aria-hidden="true"></i>'],
            responsive:{
                0:{
                    items:2,
                },
                360:{
                    items:3,
                },
                600:{
                    items:4,
                },
                1000:{
                    items:5,
                }
            }
        })
    }
    certifications_carousel();

    /*----------------------------------------------------*/
    /* Offcanvas Menu js
    /*----------------------------------------------------*/
    $('.icon_search, .ti-close').on('click', function() {
        if ($(".search_area").hasClass('open')) {
            $(".search_area").removeClass('open')
        } else {
            $(".search_area").addClass('open')
        }
        return false
    });

    /*----------------------------------------------------*/
    /*  Google map js
    /*----------------------------------------------------*/
    if ($('#mapBox').length) {
        var $lat = $('#mapBox').data('lat');
        var $lon = $('#mapBox').data('lon');
        var $zoom = $('#mapBox').data('zoom');
        var $marker = $('#mapBox').data('marker');
        var $info = $('#mapBox').data('info');
        var $markerLat = $('#mapBox').data('mlat');
        var $markerLon = $('#mapBox').data('mlon');
        var map = new GMaps({
            el: '#mapBox',
            lat: $lat,
            lng: $lon,
            scrollwheel: false,
            scaleControl: true,
            streetViewControl: true,
            panControl: true,
            disableDoubleClickZoom: false,
            mapTypeControl: false,
            zoom: $zoom,
            styles: [{
                    "featureType": "water",
                    "elementType": "geometry",
                    "stylers": [{
                            "color": "#e9e9e9"
                        },
                        {
                            "lightness": 17
                        }
                    ]
                },
                {
                    "featureType": "landscape",
                    "elementType": "geometry",
                    "stylers": [{
                            "color": "#f5f5f5"
                        },
                        {
                            "lightness": 20
                        }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "geometry.fill",
                    "stylers": [{
                            "color": "#ffffff"
                        },
                        {
                            "lightness": 17
                        }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "geometry.stroke",
                    "stylers": [{
                            "color": "#ffffff"
                        },
                        {
                            "lightness": 29
                        },
                        {
                            "weight": 0.2
                        }
                    ]
                },
                {
                    "featureType": "road.arterial",
                    "elementType": "geometry",
                    "stylers": [{
                            "color": "#ffffff"
                        },
                        {
                            "lightness": 18
                        }
                    ]
                },
                {
                    "featureType": "road.local",
                    "elementType": "geometry",
                    "stylers": [{
                            "color": "#ffffff"
                        },
                        {
                            "lightness": 16
                        }
                    ]
                },
                {
                    "featureType": "poi",
                    "elementType": "geometry",
                    "stylers": [{
                            "color": "#f5f5f5"
                        },
                        {
                            "lightness": 21
                        }
                    ]
                },
                {
                    "featureType": "poi.park",
                    "elementType": "geometry",
                    "stylers": [{
                            "color": "#dedede"
                        },
                        {
                            "lightness": 21
                        }
                    ]
                },
                {
                    "elementType": "labels.text.stroke",
                    "stylers": [{
                            "visibility": "on"
                        },
                        {
                            "color": "#ffffff"
                        },
                        {
                            "lightness": 16
                        }
                    ]
                },
                {
                    "elementType": "labels.text.fill",
                    "stylers": [{
                            "saturation": 36
                        },
                        {
                            "color": "#333333"
                        },
                        {
                            "lightness": 40
                        }
                    ]
                },
                {
                    "elementType": "labels.icon",
                    "stylers": [{
                        "visibility": "off"
                    }]
                },
                {
                    "featureType": "transit",
                    "elementType": "geometry",
                    "stylers": [{
                            "color": "#f2f2f2"
                        },
                        {
                            "lightness": 19
                        }
                    ]
                },
                {
                    "featureType": "administrative",
                    "elementType": "geometry.fill",
                    "stylers": [{
                            "color": "#fefefe"
                        },
                        {
                            "lightness": 20
                        }
                    ]
                },
                {
                    "featureType": "administrative",
                    "elementType": "geometry.stroke",
                    "stylers": [{
                            "color": "#fefefe"
                        },
                        {
                            "lightness": 17
                        },
                        {
                            "weight": 1.2
                        }
                    ]
                }
            ]
        });

        map.addMarker({
            lat: $markerLat,
            lng: $markerLon,
            icon: $marker,
            infoWindow: {
                content: $info
            }
        })
    }


})(jQuery)