import { TestBed, inject } from '@angular/core/testing';

import { CommonTableService } from './common-table.service';
describe('CommonTableService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CommonTableService]
    });
  });

  it('should be created', inject([ CommonTableService], (userservice: CommonTableService, clientservice:CommonTableService ) => {
    expect([userservice,clientservice]).toBeTruthy();
  }));
});
