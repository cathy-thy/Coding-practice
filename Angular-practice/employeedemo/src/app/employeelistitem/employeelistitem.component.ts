import { Component, Input, OnInit } from '@angular/core';
import { Employee } from 'src/shared/employee.module';

@Component({
  selector: 'app-employeelistitem',
  templateUrl: './employeelistitem.component.html',
  styleUrls: ['./employeelistitem.component.css']
})
export class EmployeelistitemComponent implements OnInit {

  
  //employee = new Employee(1,"Yamada Ryosuke","https://www.tv-asahi.co.jp/orekawa/cast/img/cast01.jpg", "Sales")
  @Input() employee:Employee | undefined ;

  constructor() { }

  ngOnInit(): void {
  }

}