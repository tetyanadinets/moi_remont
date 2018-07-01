jQuery(document).ready(function() {
	jQuery('.rpk-poster').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		cssEase: 'ease',
		autoplay: true,
		speed: 700
	});

	jQuery(window).scroll(function(){
        if ($(this).scrollTop() > 300) {
            jQuery('.rpk-arrow-top').addClass('rpk-arrow-top_show');
        } else {
            jQuery('.rpk-arrow-top').removeClass('rpk-arrow-top_show');
        }
    });
    jQuery('.rpk-arrow-top').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 500);
    });

    jQuery('[data-text-show]').click(function(){
    	jQuery('.top__hidden').fadeIn();
    });
    jQuery('[data-text-hide]').click(function(){
    	jQuery('.top__hidden').fadeOut();
    });

    jQuery('[data-call]').click(function(){
    	jQuery('.rpk-popup-call').addClass('rpk-popup-call_show');
    });

	jQuery('.rpk-popup-call__overlay').click(function() {
    		jQuery('.rpk-popup-call').removeClass('rpk-popup-call_show');
	});

	jQuery('[data-application]').click(function(){
    	jQuery('.rpk-popup-application').addClass('rpk-popup-application_show');
    });

    jQuery('.rpk-popup-application__overlay').click(function() {
    		jQuery('.rpk-popup-application').removeClass('rpk-popup-application_show');
	});

});
