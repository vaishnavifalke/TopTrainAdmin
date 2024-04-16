import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMockInterviewComponent } from './add-mock-interview.component';

describe('AddMockInterviewComponent', () => {
  let component: AddMockInterviewComponent;
  let fixture: ComponentFixture<AddMockInterviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddMockInterviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddMockInterviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
