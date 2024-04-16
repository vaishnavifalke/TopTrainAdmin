import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUserGoalComponent } from './add-user-goal.component';

describe('AddUserGoalComponent', () => {
  let component: AddUserGoalComponent;
  let fixture: ComponentFixture<AddUserGoalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddUserGoalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddUserGoalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
