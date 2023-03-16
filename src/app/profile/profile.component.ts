import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  currentUserRole=JSON.parse(sessionStorage.getItem('currentUserRole')||'');
  currentUser=JSON.parse(sessionStorage.getItem('currentuser')||'')
  allUserProfile:any;
  constructor(){
    this.allUserProfile=JSON.parse(localStorage.getItem('values')||'[]');
  }
  
}
