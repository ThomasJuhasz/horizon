import { Component, OnInit, AfterViewInit, Host } from '@angular/core';
import { i18nService } from "../../services/i18n/i18n.service";
import { Router, NavigationEnd } from "@angular/router";
import { AuthenticationService } from "../../services/authentication/authentication.service";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit, AfterViewInit {

  currentLang: string;
  switchButtonLang: string;
  loginButtonLabel: string;

  constructor(private i18n: i18nService, private router: Router, private authenticationService: AuthenticationService) {
  }

  ngOnInit() {
    this.currentLang = this.i18n.currentLang;
    this.switchButtonLang = this.languageSwitchButtonLanguage();

    this.router.events
      .filter(event => event instanceof NavigationEnd)
      .subscribe((event) => {
        let user = this.authenticationService.getUser();
        this.loginButtonLabel = user ? user.username : this.i18n.instant('header.login_button');
      });

  }

  switchLanguage() {
    this.i18n.use(this.switchButtonLang, true);
  }

  languageSwitchButtonLanguage() {
    return this.currentLang === 'en' ? 'hu' : 'en'
  }

  ngAfterViewInit(): void {

  }
}
