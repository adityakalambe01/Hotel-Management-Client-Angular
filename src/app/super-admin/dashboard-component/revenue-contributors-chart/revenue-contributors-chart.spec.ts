import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RevenueContributorsChart } from './revenue-contributors-chart';

describe('RevenueContributorsChart', () => {
  let component: RevenueContributorsChart;
  let fixture: ComponentFixture<RevenueContributorsChart>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RevenueContributorsChart]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RevenueContributorsChart);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
