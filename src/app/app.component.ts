import { Component, OnInit, ApplicationRef } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { i18nService } from "./services/i18n/i18n.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
  providers: []
})
export class AppComponent implements OnInit {
  constructor(private router: Router,
    private titleService: Title,
    private activatedRoute: ActivatedRoute,
    private i18n: i18nService) { }

  currentLangCode: string;

  ngOnInit() {
    this.router.events
      .filter(event => event instanceof NavigationEnd)
      .map(() => {
        let route: ActivatedRoute = this.activatedRoute;
        while (route.firstChild) route = route.firstChild;
        return route;
      })
      .filter(route => route.outlet === 'primary')
      .mergeMap(route => route.data)
      .subscribe((event) => {
        this.titleService.setTitle('Horizon | ' + this.i18n.instant(event['title']));

        window.scrollTo(0, 0);
      });

    this.currentLangCode = this.i18n.currentLang;

    document.getElementById('full-page-loader').className += 'hide-full-page-loader';
  }
}