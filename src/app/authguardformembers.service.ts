import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthguardformembersService implements CanActivate{

  constructor(private router: Router) { }

  canActivate(): any {
    const currentUser = sessionStorage.getItem('currentuser');
    if (currentUser) {
      const currentUserRole = sessionStorage.getItem('currentUserRole');
      if (currentUserRole == '"teamleader"') {
        return true;
      } else {
        this.router.navigate(['/teammember']);
        return false;
      }
  }
    else {
      this.router.navigate(['/login']);
      return false;
      }
    }
}
