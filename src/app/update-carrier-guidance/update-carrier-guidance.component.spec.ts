import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCarrierGuidanceComponent } from './update-carrier-guidance.component';

describe('UpdateCarrierGuidanceComponent', () => {
  let component: UpdateCarrierGuidanceComponent;
  let fixture: ComponentFixture<UpdateCarrierGuidanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateCarrierGuidanceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateCarrierGuidanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
