import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-members',
  templateUrl: './edit-members.component.html',
  styleUrls: ['./edit-members.component.css']
})
export class EditMembersComponent {
  userData:any;
  addUserCheck= false;
  id=JSON.parse(localStorage.getItem('values')|| '[]').length;

  constructor(private router: Router){
    this.userData=JSON.parse(localStorage.getItem('values') || '[]')
  }

  addUser(id:number,username: string, password: string) {
    alert('user added succesfully')
    this.userData.push({id,username, password});
    localStorage.setItem('values', JSON.stringify(this.userData));
    location.reload()
  }

  deleteUser(index: number) {
    confirm('are you sure?')
    const currentUser = JSON.parse(sessionStorage.getItem('currentuser') || '{}');
    if (currentUser === this.userData[index].username) {
      this.logout();
    }
    this.userData.splice(index, 1);
    localStorage.setItem('values', JSON.stringify(this.userData));
  }
 addUsers(){
    this.addUserCheck=true;
  }

  showUser(){
    this.addUserCheck=false;
  }

  logout() {
    sessionStorage.removeItem('currentuser');
    sessionStorage.removeItem('currentUserRole');
    this.router.navigate(['/login']);
  }
}
