import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItsCreatedComponent } from './its-created.component';

describe('ItsCreatedComponent', () => {
  let component: ItsCreatedComponent;
  let fixture: ComponentFixture<ItsCreatedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ItsCreatedComponent]
    });
    fixture = TestBed.createComponent(ItsCreatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
