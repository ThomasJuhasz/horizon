import { Injectable } from '@angular/core';
import { HttpService } from '../shared/httpService/httpService.service';

@Injectable()
export class ValueService {

  constructor(private http: HttpService) { }

  get() {
    return this.http.get('/api/orders');
  }
}