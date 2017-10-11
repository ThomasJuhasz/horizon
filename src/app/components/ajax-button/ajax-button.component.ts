import { Component, Input, OnInit } from '@angular/core';
import { Observable } from "rxjs/Observable";

export class AjaxButtonParams {
  title: string;
  onClick: () => Observable<any>;
  successCallback: (result: any) => void;
  errorCallback: (error: any) => void;
}

@Component({
  selector: 'app-ajax-button',
  templateUrl: './ajax-button.component.html',
  styleUrls: ['./ajax-button.component.less']
})
export class AjaxButtonComponent implements OnInit {
  @Input() params: AjaxButtonParams;
  stateString: string;
  state: States;
  States = States;

  constructor() { }

  ngOnInit() {
    this.setStateToDefault();
  }

  save(button) {
    this.setStateToLoading();
    button.disabled = true;

    var saveStream = this.params.onClick()
    saveStream.subscribe(
      result => {
        this.setStateToSuccess();
        this.params.successCallback(result)

        setTimeout(() => {
          this.setStateToDefault();
        }, 2000)
      },
      error => {
        this.setStateToError();
        this.params.errorCallback(error)

        setTimeout(() => {
          this.setStateToDefault();
        }, 2000)
      });
  }

  setStateToDefault() {
    this.state = States.default
  }
  setStateToLoading() {
    this.state = States.loading
  }
  setStateToSuccess() {
    this.state = States.success
  }
  setStateToError() {
    this.state = States.error
  }

}

enum States {
  default,
  loading,
  success,
  error
}