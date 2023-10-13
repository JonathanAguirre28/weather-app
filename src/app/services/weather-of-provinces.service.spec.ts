import { TestBed } from '@angular/core/testing';

import { WeatherOfProvincesService } from './weather-of-provinces.service';

describe('WeatherOfProvincesService', () => {
  let service: WeatherOfProvincesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WeatherOfProvincesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
