jQuery(document).ready(function($) {

	var my_nav = $('.navbar-sticky'); 
	// grab the initial top offset of the navigation 
	var sticky_navigation_offset_top = 200 + my_nav.offset().top;
	
	// our function that decides weather the navigation bar should have "fixed" css position or not.
	var sticky_navigation = function(){
		var scroll_top = $(window).scrollTop(); // our current vertical position from the top
		
		// if we've scrolled more than the navigation, change its position to fixed to stick to top, otherwise change it back to relative
		if (scroll_top > sticky_navigation_offset_top) { 
			my_nav.addClass( 'stick' );
		} else {
			my_nav.removeClass( 'stick' );
		}   
	};

	var initio_parallax_animation = function() { 
		$('.parallax').each( function(i, obj) {
			var speed = $(this).attr('parallax-speed');
			if( speed ) {
				var background_pos = '-' + (window.pageYOffset / speed) + "px";
				$(this).css( 'background-position', 'center ' + background_pos );
			}
		});
	}
	
	// run our function on load
	sticky_navigation();
	
	// and run it again every time you scroll
	$(window).scroll(function() {
		 sticky_navigation();
		 initio_parallax_animation();
	});

});

/*! slides | https://gist.github.com/mhulse/66bcbb7099bb4beae530 
(function($) {
	
	'use strict';
	
	var $slides = $('[data-slides]');
	var images = $slides.data('slides');
	var count = images.length;
	var slideshow = function() {
		$slides
			.css('background-image', 'url("' + images[Math.floor(Math.random() * count)] + '")')
			.show(0, function() {
				setTimeout(slideshow, 5000);
			});
	};
	
	slideshow();
	
}(jQuery));*/
/*!
 * By Eharry.me (https://gist.github.com/Ema4rl/b8ef90be99205ddada5ef2cd6e632ebe)
 */
 ! function ($) {
    "use strict";
    var slide = $("[data-slides]"),
        count = 0,
        slides = slide.data("slides"),
        len = slides.length,
        n = function () {
            if (count >= len) {
                count = 0
            }
            slide.css("background-image", 'url("' + slides[count] + '")').show(0, function () {
                setTimeout(n, 5e3)
            });
            count++;
        };
    n()
}(jQuery);
