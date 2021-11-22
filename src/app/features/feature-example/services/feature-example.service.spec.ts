import { TestBed } from '@angular/core/testing';

import { FeatureExampleService } from './feature-example.service';

describe('FeatureExampleService', () => {
  let service: FeatureExampleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FeatureExampleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
