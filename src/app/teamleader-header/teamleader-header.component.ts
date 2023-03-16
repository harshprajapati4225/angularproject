import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-teamleader-header',
  templateUrl: './teamleader-header.component.html',
  styleUrls: ['./teamleader-header.component.css']
})
export class TeamleaderHeaderComponent {
  currentUser:any;
  currentUserRole=JSON.parse(sessionStorage.getItem('currentUserRole')||'');
  constructor(private router: Router){
    this.currentUser=JSON.parse(sessionStorage.getItem('currentuser') || '')
  }
  logout():void{
    sessionStorage.clear()
    this.router.navigate(['/login'])
  }  
}
