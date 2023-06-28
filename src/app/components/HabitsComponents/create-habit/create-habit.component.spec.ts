import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalHabitComponent } from './create-habit.component';

describe('ModalHabitComponent', () => {
  let component: ModalHabitComponent;
  let fixture: ComponentFixture<ModalHabitComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalHabitComponent]
    });
    fixture = TestBed.createComponent(ModalHabitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
