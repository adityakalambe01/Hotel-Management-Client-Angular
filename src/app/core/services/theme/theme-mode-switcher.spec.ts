import { TestBed } from '@angular/core/testing';

import { ThemeModeSwitcher } from './theme-mode-switcher';

describe('ThemeModeSwitcher', () => {
  let service: ThemeModeSwitcher;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ThemeModeSwitcher);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
