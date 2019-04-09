import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErollStudentComponent } from './eroll-student.component';

describe('ErollStudentComponent', () => {
  let component: ErollStudentComponent;
  let fixture: ComponentFixture<ErollStudentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErollStudentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErollStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
