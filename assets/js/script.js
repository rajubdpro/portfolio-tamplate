(function ($) {
    "use strict";
    new WOW().init();

    // Mobile Nav Hide Show
    if ($('.off-canvas-menu').length) {


        var mobileMenuContent = $('.desktop-menu>ul').html();
        $('.off-canvas-menu .navigation').append(mobileMenuContent);

        // Menu Toggle Btn
        $('.mobile-nav-toggler').on('click',function () {
                $('body').addClass('off-canvas-menu-visible');
            }
        );

        // Menu Toggle Btn
        $('.off-canvas-menu .menu-backdrop,.off-canvas-menu .close-btn').on('click',function () {
                $('body').delay(3000).removeClass('off-canvas-menu-visible');
            }
        );
    }

    $('.off-canvas-menu li.menu-item-has-children').append('<div class="dropdown-btn"><span class="fa fa-angle-down"></span></div>');
    $('.off-canvas-menu li.menu-item-has-children .dropdown-btn').on(
        'click',
        function () {
            $(this).prev('ul').slideToggle(500);
        }
    );


    /*---slider activation---*/
    var $HeroMainSlider = $('.hero-slider-full');
    if($HeroMainSlider.length > 0){
        $HeroMainSlider.owlCarousel({
            loop: true,
            dots:true,
            autoplay: true,
            autoplayTimeout: 15000,
	        smartSpeed: 1500,
            items: 1,
            nav:false,
        });
    }
    /*---slider activation---*/
    var $CategorySlider = $('.food-category-slider');
    if($CategorySlider.length > 0){
        $CategorySlider.owlCarousel({
            loop: true,
            nav: false,
            dots:false,
            autoplay: true,
            autoplayTimeout: 5000,
	        smartSpeed: 1500,
            items: 3,
            responsive:{
                    0:{
                    items:2,
                },
                675:{
                    items:3,
                },
                767:{
                    items:4,
                },
                991:{
                    items:5,
                },
                1200:{
                    items:6,
                },

            }
        });
    }

// init Isotope
var $grid = $('.portfolio-items').isotope({
	// options
  });
  // filter items on button click
  $('.portfolio-menu').on( 'click', 'li', function() {
	var filterValue = $(this).attr('data-filter');
	$grid.isotope({ filter: filterValue });
  });

    //back to top btn
  $(window).scroll(function(){
    if($(this).scrollTop() > 40){
    $('#topBtn').fadeIn();
    } else{
        $('#topBtn').fadeOut();
    }
      
    });
    
        $("#topBtn").click(function(){
            $('html ,body').animate({scrollTop: 0 }, 800);
    
        });

        
})(jQuery);




