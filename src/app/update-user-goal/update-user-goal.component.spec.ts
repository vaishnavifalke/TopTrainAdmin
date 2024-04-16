import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateUserGoalComponent } from './update-user-goal.component';

describe('UpdateUserGoalComponent', () => {
  let component: UpdateUserGoalComponent;
  let fixture: ComponentFixture<UpdateUserGoalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateUserGoalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateUserGoalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
