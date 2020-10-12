import { TestBed } from '@angular/core/testing';

import { DespesasSenadoresService } from './despesas-senadores.service';

describe('DespesasSenadoresService', () => {
  let service: DespesasSenadoresService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DespesasSenadoresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
