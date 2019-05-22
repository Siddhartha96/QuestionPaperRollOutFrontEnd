import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AllService } from './all.service';
import { Router } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private router:Router,private servee:AllService){}
  canActivate(next: ActivatedRouteSnapshot,state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean 
    { if(localStorage.getItem('username'))
      {
        return this.servee.getUserLoggedIn();
      }
      this.router.navigate(['/login']);
        return false;
 
    }
}
