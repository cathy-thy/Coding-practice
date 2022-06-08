import { Component, OnInit } from '@angular/core';
import { User } from 'src/shared/user.module';
import { UserregisterService } from 'src/shared/userregister.service';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {
  userlist:User[];

  constructor(private userregisterservice:UserregisterService) { }

  ngOnInit(): void {
    this.userlist = this.userregisterservice.getUsers();
    console.log("From userdetails.component.ts:\n", this.userlist);
  }

}
