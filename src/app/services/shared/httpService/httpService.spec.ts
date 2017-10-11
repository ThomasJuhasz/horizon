import { TestBed, inject } from '@angular/core/testing';

import { HttpService } from './httpservice.service';

describe('ValueServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpService]
    });
  });

  it('should ...', inject([HttpService], (service: HttpService) => {
    expect(service).toBeTruthy();
  }));
});
