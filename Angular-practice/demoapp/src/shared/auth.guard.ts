import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  isLoggedIn:boolean;

  //inject dependency
  constructor(private authservice:AuthService,
    private router:Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
    //subscribe to the service
    this.authservice.isLoggedIn.subscribe((isLoggedInFlag:boolean)=>{
      this.isLoggedIn=isLoggedInFlag;});

    if(this.isLoggedIn)
    {
      return true;
    }
    //if user is not logged in

    this.router.navigate(['login']);
    return false;
  }
  
}
