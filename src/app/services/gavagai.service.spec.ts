import { TestBed, inject } from '@angular/core/testing';

import { GavagaiService } from './gavagai.service';

describe('GavagaiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GavagaiService]
    });
  });

  it('should be created', inject([GavagaiService], (service: GavagaiService) => {
    expect(service).toBeTruthy();
  }));
});
