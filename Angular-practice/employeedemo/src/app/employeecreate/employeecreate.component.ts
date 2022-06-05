import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Employee } from 'src/shared/employee.module';

@Component({
  selector: 'app-employeecreate',
  templateUrl: './employeecreate.component.html',
  styleUrls: ['./employeecreate.component.css']
})
export class EmployeecreateComponent implements OnInit {
  empid!: number;
  name!: string;
  imagepath!: string ;
  designation!: string ;

  @Output() newEmployeeAdded = new EventEmitter<Employee>();
  
  constructor() { }


  ngOnInit(): void {

  }

  onAddEmployee()
  {

    //let newemployee = new Employee(5,employeeForm.value.name, employeeForm.value.imagepath, employeeForm.value.designation);
    let newemployee = new Employee(5, this.name, this.imagepath, this.designation);
    // console.log(newemployee)
    this.newEmployeeAdded.emit(newemployee);
  }
}
