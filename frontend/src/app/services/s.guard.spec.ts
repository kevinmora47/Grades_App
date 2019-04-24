import { TestBed, async, inject } from '@angular/core/testing';

import { SGuard } from './s.guard';

describe('SGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SGuard]
    });
  });

  it('should ...', inject([SGuard], (guard: SGuard) => {
    expect(guard).toBeTruthy();
  }));
});
 