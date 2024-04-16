import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCarrierGuidanceComponent } from './add-carrier-guidance.component';

describe('AddCarrierGuidanceComponent', () => {
  let component: AddCarrierGuidanceComponent;
  let fixture: ComponentFixture<AddCarrierGuidanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCarrierGuidanceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddCarrierGuidanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
