import { TestBed } from '@angular/core/testing';

import { PrismicService } from './prismic.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('PrismicService', () => {
  let service: PrismicService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(PrismicService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
