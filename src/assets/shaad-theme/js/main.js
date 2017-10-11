(function ($) {
 "use strict";

/*----------------------------
	jQuery MeanMenu
------------------------------ */
	jQuery('nav#dropdown').meanmenu();	
	
/*----------------------------
	sticky
------------------------------ */
	var s = $("#header");
	var pos = s.position();
	$(window).scroll(function() {
		var windowpos = $(window).scrollTop();
		if (windowpos > pos.top) {
		s.addClass("sticky");
		} else {
			s.removeClass("sticky");	
		}
	});
	
/*----------------------------
	wow js active
------------------------------ */
	new WOW().init();
 
/*----------------------------
	masonry active
------------------------------ */
	
	var $galleryMasonry = $('.gallery-content').imagesLoaded( function() {
	  // init Masonry after all images have loaded
	  $galleryMasonry.masonry({
		itemSelector: '.gallery-item',
		columnWidth: 1,
		percentPosition: true
	  });
	});
 
/*----------------------------
	owl active
------------------------------ */  
	$("#testimonial-carousel").owlCarousel({
	  autoPlay: false, 
	  slideSpeed:2000,
	  pagination:false,
	  navigation:false,	  
	  items : 2,
	  /* transitionStyle : "fade", */    /* [This code for animation ] */
	  navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
	  itemsDesktop : [1199,2],
	  itemsDesktopSmall : [980,2],
	  itemsTablet: [768,1],
	  itemsMobile : [479,1],
	});
	
/*--------------------------
	datepicker
---------------------------- */
	$("#datepicker").Zebra_DatePicker({
		format: 'm-d-Y',
		default_position: 'below',
		show_icon: false,
	});
	
/*----------------------------
	onePageNav
------------------------------ */  
	$('#header-nav, .mobile-menu-area ul').onePageNav();
	  	  
/*----------------------------
	magnificPopup
------------------------------ */
	$('.magnify').magnificPopup({
		type: 'image'
	});
	
/*--------------------------
	scrollUp
---------------------------- */	
	$.scrollUp({
        scrollText: '<i class="zmdi zmdi-long-arrow-up"></i>',
        easingType: 'linear',
        scrollSpeed: 900,
        animation: 'fade'
    }); 	   
 
})(jQuery); 