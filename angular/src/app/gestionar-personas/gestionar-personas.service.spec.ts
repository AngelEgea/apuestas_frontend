import { TestBed } from '@angular/core/testing';

import { GestionarPersonasService } from './gestionar-personas.service';

describe('GestionarPersonasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GestionarPersonasService = TestBed.get(GestionarPersonasService);
    expect(service).toBeTruthy();
  });
});
