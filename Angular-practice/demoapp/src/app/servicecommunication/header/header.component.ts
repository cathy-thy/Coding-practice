import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/shared/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isLoggedInState:boolean=false;
  isLoggedInSubscription:Subscription;

  constructor(private authservice:AuthService) { }

  ngOnInit(): void {
    this.isLoggedInSubscription=this.authservice.isLoggedIn.subscribe((isLoggedInFlag:boolean)=>{
      this.isLoggedInState=isLoggedInFlag;
    })
  }
  ngOnDestroy()
  {
    this.isLoggedInSubscription.unsubscribe();
  }


}
