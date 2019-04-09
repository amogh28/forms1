import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckforStudentComponent } from './checkfor-student.component';

describe('CheckforStudentComponent', () => {
  let component: CheckforStudentComponent;
  let fixture: ComponentFixture<CheckforStudentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckforStudentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckforStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
