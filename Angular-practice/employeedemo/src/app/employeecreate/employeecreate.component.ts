import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Employee } from 'src/shared/employee.module';

@Component({
  selector: 'app-employeecreate',
  templateUrl: './employeecreate.component.html',
  styleUrls: ['./employeecreate.component.css']
})
export class EmployeecreateComponent implements OnInit {

  @Output() newEmployeeAdded = new EventEmitter<Employee>();
  
  constructor() { }


  ngOnInit(): void {

  }

  onAddEmployee(employeeForm:NgForm)
  {
    console.log("enter employeecreate component ts")
    let newemployee = new Employee(5,employeeForm.value.name, employeeForm.value.imagepath, employeeForm.value.designation);
    this.newEmployeeAdded.emit(newemployee);
  }
}
