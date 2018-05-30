import { TestBed, inject } from '@angular/core/testing';

import { CommonTableUserService } from './common-table-user.service';
import { CommonTableClientService } from './common-table-client.service';
describe('CommonTableUserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CommonTableUserService, CommonTableClientService]
    });
  });

  it('should be created', inject([CommonTableUserService, CommonTableClientService], (userservice: CommonTableUserService, clientservice:CommonTableClientService ) => {
    expect([userservice,clientservice]).toBeTruthy();
  }));
});
