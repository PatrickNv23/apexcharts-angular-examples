import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleYAxisComponent } from './multiple-yaxis.component';

describe('MultipleYAxisComponent', () => {
  let component: MultipleYAxisComponent;
  let fixture: ComponentFixture<MultipleYAxisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultipleYAxisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MultipleYAxisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
