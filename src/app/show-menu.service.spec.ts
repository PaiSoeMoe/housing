import { TestBed } from '@angular/core/testing';

import { ShowMenuService } from './show-menu.service';

describe('ShowMenuService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ShowMenuService = TestBed.get(ShowMenuService);
    expect(service).toBeTruthy();
  });
});
