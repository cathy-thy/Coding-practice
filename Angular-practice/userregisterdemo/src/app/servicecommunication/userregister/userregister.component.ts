import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserregisterService } from 'src/shared/userregister.service';

@Component({
  selector: 'app-userregister',
  templateUrl: './userregister.component.html',
  styleUrls: ['./userregister.component.css']
})
export class UserregisterComponent implements OnInit {

  constructor(private userregisterservice: UserregisterService) { }

  ngOnInit(): void {
  }

  onAddUser(registerForm:NgForm)
  {
    this.userregisterservice.addUser(registerForm.value.name,registerForm.value.mobileno, 
      registerForm.value.email, registerForm.value.address, 
      registerForm.value.id, registerForm.value.taxno, 
      registerForm.value.location);
  }

}
