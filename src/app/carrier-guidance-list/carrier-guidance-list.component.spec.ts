import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrierGuidanceListComponent } from './carrier-guidance-list.component';

describe('CarrierGuidanceListComponent', () => {
  let component: CarrierGuidanceListComponent;
  let fixture: ComponentFixture<CarrierGuidanceListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarrierGuidanceListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarrierGuidanceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
