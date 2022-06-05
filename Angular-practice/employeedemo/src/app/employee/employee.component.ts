import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/shared/employee.module';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  storedEmployees: Employee[]=[];

  constructor() { }

  ngOnInit(): void {
  }

  //handler
  onNewEmployeeAdded(newEmployee:Employee)
  {
    this.storedEmployees.push(newEmployee);
    console.log(this.storedEmployees);
  }

}
