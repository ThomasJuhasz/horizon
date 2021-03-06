import { Injectable } from '@angular/core';
import { Response, Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Configuration } from '../../../../../configuration';
import { AuthenticationService } from "../../authentication/authentication.service";

@Injectable()
export class HttpService {
  urlPrefix: string;

  constructor(private http: Http, private authenticationService: AuthenticationService) {
    this.urlPrefix = Configuration.apiBaseUrl;
  }

  // TODO: global error handling
  get(url: string): Observable<any> {
    return this.http
      .get(this.urlPrefix + url, {
        headers: this.createAuthorizationHeader()
      })
      .map(res => res.json())
  }

  post(url: string, data: any, options?: object): Observable<any> {
    return this.http.post(this.urlPrefix + url, data, {
      headers: this.createAuthorizationHeader()
    });
  }

  createAuthorizationHeader() {
    let headers = new Headers();
    let user = this.authenticationService.getUser();
    if (user) {
      let token = user.token.token_type + " " + user.token.access_token;
      headers.append('Authorization', token);
    }

    return headers;
  }
}