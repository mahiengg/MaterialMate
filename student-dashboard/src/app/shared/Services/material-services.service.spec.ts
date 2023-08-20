import { TestBed } from '@angular/core/testing';

import { MaterialServicesService } from './material-services.service';

describe('MaterialServicesService', () => {
  let service: MaterialServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MaterialServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
