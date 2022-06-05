import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/shared/employee.module';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  storedEmployees: Employee[]=[  
    new Employee(1,"Maruya Kosuke","https://www.tv-asahi.co.jp/orekawa/cast/img/cast01.jpg", "Sales"),
    new Employee(2,"Sanada Izumi","https://www.tv-asahi.co.jp/orekawa/cast/img/cast02.jpg", "Sales"),
    new Employee(3,"Ichinose Kei","https://www.tv-asahi.co.jp/orekawa/cast/img/cast03.jpg", "Sales"),
    new Employee(4,"Mysterious man","https://www.tv-asahi.co.jp/orekawa/cast/img/cast05.jpg", "Sales")];

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
