import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TeamLeaderGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const userRole = localStorage.getItem('userRole');
    const pageName = route.data['pageName'];
    if (userRole === 'teamLeader') {
      return true;
    } else {
      this.router.navigate([`/${pageName}`]);
      return false;
    }
  }
}
