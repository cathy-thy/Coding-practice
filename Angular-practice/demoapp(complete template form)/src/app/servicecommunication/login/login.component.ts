import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/shared/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username:string;
  password:string;

  //dependency injection
  //activedRoute only required when their is child route
  constructor(private authservice:AuthService,
    private router:Router ) { }

  ngOnInit(): void {
  }

  onLogin()
  {
    let result = this.authservice.onLogin(this.username, this.password);
    if(result){
      this.router.navigate(['products'])
    }
  }

}
