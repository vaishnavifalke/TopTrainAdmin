import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateMockInterviewComponent } from './update-mock-interview.component';

describe('UpdateMockInterviewComponent', () => {
  let component: UpdateMockInterviewComponent;
  let fixture: ComponentFixture<UpdateMockInterviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateMockInterviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateMockInterviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
