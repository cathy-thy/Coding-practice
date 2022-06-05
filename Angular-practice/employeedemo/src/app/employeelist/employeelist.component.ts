import { Component, OnInit, Input } from '@angular/core';
import { Employee } from 'src/shared/employee.module';


@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.css']
})
export class EmployeelistComponent implements OnInit {

  employeelist: Employee[]=[
    new Employee(1,"Maruya Kosuke","https://www.tv-asahi.co.jp/orekawa/cast/img/cast01.jpg", "Sales"),
    new Employee(2,"Sanada Izumi","https://www.tv-asahi.co.jp/orekawa/cast/img/cast02.jpg", "Sales"),
    new Employee(3,"Ichinose Kei","https://www.tv-asahi.co.jp/orekawa/cast/img/cast03.jpg", "Sales"),
    new Employee(4,"Mysterious man","https://www.tv-asahi.co.jp/orekawa/cast/img/cast05.jpg", "Sales"),
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
