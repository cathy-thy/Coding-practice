import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/shared/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // username:string;
  // password:string;

  //Reactive form: have form with class
  loginForm=new FormGroup({
    //two instances 
    username: new FormControl('',[Validators.required,Validators.email]),
    password: new FormControl('',[Validators.required, this.customvalidator])
  });
  
  get LoginFormControls():any{
    return this.loginForm['controls'];
  }

  //if data is valid, return null, otherwise, return key value
  customvalidator(control:FormControl):{[key:string]:boolean}|null{
    if(control.value.length<3)
    {
      return {"invalid":true}
    }
    return null;
  }

  //dependency injection
  //activedRoute only required when their is child route
  constructor(private authservice:AuthService,
    private router:Router ) { }

  ngOnInit(): void {
  }

  onLogin()
  {
    //let result = this.authservice.onLogin(this.username, this.password);
    let result=this.authservice.onLogin(this.loginForm.value.username,this.loginForm.value.password)
    if(result){
      this.router.navigate(['products'])
    }
  }

}
