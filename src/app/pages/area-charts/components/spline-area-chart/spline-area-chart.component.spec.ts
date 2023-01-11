import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SplineAreaChartComponent } from './spline-area-chart.component';

describe('SplineAreaChartComponent', () => {
  let component: SplineAreaChartComponent;
  let fixture: ComponentFixture<SplineAreaChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SplineAreaChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SplineAreaChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
