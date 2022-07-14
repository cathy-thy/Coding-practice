import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn = new Subject<boolean>();

  constructor() { }

  onLogin(username:string, password:string):boolean
  {
    //hardcode now, probably can be replaced by api call
    if (username=="admin@gmail.com" && password=="admin")
    {
      this.isLoggedIn.next(true);
      return true;
    }
    return false;
  }
  onLogout()
  {
    this.isLoggedIn.next(false);
  }
}
