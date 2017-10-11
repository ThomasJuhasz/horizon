import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication/authentication.service';
import { Observable } from "rxjs";
import { AjaxButtonParams } from "../../components/ajax-button/ajax-button.component";
import { i18nService } from "../../services/i18n/i18n.service";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.less']
})
export class RegistrationComponent implements OnInit {
  backUrl: any;
  model: any = {};
  loading = false;
  error = '';
  registerButtonParams: AjaxButtonParams;

  constructor(
    private authenticationService: AuthenticationService,
    private i18n: i18nService) { }

  ngOnInit() {
    this.registerButtonParams = {
      title: this.i18n.instant('registration.register_button'),
      onClick: this.registerAndLogin.bind(this),
      successCallback: this.registerSuccess.bind(this),
      errorCallback: this.registerError.bind(this)
    };
  }

  registerAndLogin() {
    this.error = null;

    return this.authenticationService.register(this.model.username, this.model.password)
      .flatMap(() => {
        return this.authenticationService.login(this.model.username, this.model.password);
      })
  }

  registerSuccess(result) {
    setTimeout(() => {
      if (/\/login$/g.test(document.referrer)) {
        window.history.go(-2);
      } else {
        window.history.back();
      }
    }, 700);
  }

  registerError(error) {
    this.error = error;
  }

}
