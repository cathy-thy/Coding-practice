import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeelistitemComponent } from './employeelistitem.component';

describe('EmployeelistitemComponent', () => {
  let component: EmployeelistitemComponent;
  let fixture: ComponentFixture<EmployeelistitemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeelistitemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeelistitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
