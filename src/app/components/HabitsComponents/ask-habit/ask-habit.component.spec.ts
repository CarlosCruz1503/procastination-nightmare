import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AskHabitComponent } from './ask-habit.component';

describe('AskHabitComponent', () => {
  let component: AskHabitComponent;
  let fixture: ComponentFixture<AskHabitComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AskHabitComponent]
    });
    fixture = TestBed.createComponent(AskHabitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
