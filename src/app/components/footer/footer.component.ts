import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.less']
})
export class FooterComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    /*--------------------------
      scrollUp
    ---------------------------- */
    $.scrollUp({
      scrollText: '<i class="zmdi zmdi-long-arrow-up"></i>',
      easingType: 'linear',
      scrollSpeed: 900,
      animation: 'fade'
    });
  }

}
