import { TestBed } from '@angular/core/testing';

import { GestionarApuestasService } from './apuestas-service.service';

describe('GestionarApuestasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GestionarApuestasService = TestBed.get(GestionarApuestasService);
    expect(service).toBeTruthy();
  });
});
