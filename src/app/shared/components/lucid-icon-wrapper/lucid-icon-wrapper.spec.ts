import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LucidIconWrapper } from './lucid-icon-wrapper';

describe('LucidIconWrapper', () => {
  let component: LucidIconWrapper;
  let fixture: ComponentFixture<LucidIconWrapper>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LucidIconWrapper]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LucidIconWrapper);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
