import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MockInterviewListComponent } from './mock-interview-list.component';

describe('MockInterviewListComponent', () => {
  let component: MockInterviewListComponent;
  let fixture: ComponentFixture<MockInterviewListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MockInterviewListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MockInterviewListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
