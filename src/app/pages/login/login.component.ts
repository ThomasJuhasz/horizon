import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication/authentication.service';
import { Observable } from "rxjs/Observable";
import { AjaxButtonParams } from "../../components/ajax-button/ajax-button.component";
import { i18nService } from "../../services/i18n/i18n.service";

@Component({
	moduleId: module.id,
	templateUrl: 'login.component.html',
	styleUrls: ['./login.component.less']
})

export class LoginComponent implements OnInit {
	model: any = {};
	loading = false;
	error = '';
	loginButtonParams: AjaxButtonParams;

	constructor(
		private authenticationService: AuthenticationService,
		private i18n: i18nService,
		private router: Router) { }

	ngOnInit() {
		// reset login status
		// TODO: take out when we have a profile page
		this.authenticationService.logout();
		this.model.username = "horizontest";
		this.model.password = "superpass";

		this.loginButtonParams = {
			title: this.i18n.instant('login.login_button'),
			onClick: this.login.bind(this),
			successCallback: this.loginSuccess.bind(this),
			errorCallback: this.loginError.bind(this)
		};
	}

	login() {
		this.error = null;
		return this.authenticationService.login(this.model.username, this.model.password);
	}

	loginSuccess(result) {
		setTimeout(() => {
			if (/\/registration$/g.test(document.referrer)) {
				window.history.go(-2);
			} else {
				window.history.back();
			}
		}, 700);
	}

	loginError(error) {
		this.error = error;
	}

	logout() {
		this.authenticationService.logout();
	}
}