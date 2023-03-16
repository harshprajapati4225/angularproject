import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthguardService implements CanActivate {

  constructor(private router: Router) { }

  canActivate(): any {
    const currentUser = sessionStorage.getItem('currentuser');
    if (currentUser) {
      const currentUserRole = sessionStorage.getItem('currentUserRole');
      if (currentUserRole == '"teammember"') {
        return true;
      } else {
        this.router.navigate(['/teamleader']);
        return false;
      }
  }
    else {
      this.router.navigate(['/login']);
      return false;
      }
    }

  // canActivate():boolean {
    // const currentUserRole = sessionStorage.getItem('currentUserRole');
    // if (currentUserRole == '"teammember"') {
    //   return true;
    // } else {
    //   this.router.navigate(['/teamleader']);
    //   return false;
    // }
  // }

}
