import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
  constructor() { }

  ngOnInit() {
    /*----------------------------
      wow js active
    ------------------------------ */
    new WOW().init();

    /*----------------------------
      masonry active
    ------------------------------ */

    var $galleryMasonry = $('.gallery-content').imagesLoaded(function () {
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
      slideSpeed: 2000,
      pagination: false,
      navigation: false,
      items: 2,
      /* transitionStyle : "fade", */    /* [This code for animation ] */
      navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
      itemsDesktop: [1199, 2],
      itemsDesktopSmall: [980, 2],
      itemsTablet: [768, 1],
      itemsMobile: [479, 1],
    });

    /*--------------------------
      datepicker
    ---------------------------- */
    // $("#datepicker").Zebra_DatePicker({
    //   format: 'm-d-Y',
    //   default_position: 'below',
    //   show_icon: false,
    // });

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
  }
}
