// import { Component } from '@angular/core';
// // import { AuthService } from '../authservice.service';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-login-page',
//   templateUrl: './login-page.component.html',
//   styleUrls: ['./login-page.component.css']
// })

// export class LoginPageComponent{
//   username='';
//   password='';
//   invalidCredentials = false;
//   Data= JSON.parse(localStorage.getItem('values') || '{}');
// userdata = this.Data;
//   constructor(
//     private router: Router
//   ) { }
//   ngOnInit(): void {
//     const currentUser = sessionStorage.getItem('currentuser');
//     if (currentUser) {
//       const role = JSON.parse(sessionStorage.getItem('currentUserRole') || '{}');
//       if (role === 'teamleader') {
//         this.router.navigate(['/teamleader']);
//       } else if (role === 'teammember') {
//         this.router.navigate(['/teammember']);
//       }
//     }
//   }
//   login(username: string, password: string) {
//     if (username === 'admin' && password === this.userdata[0].password) {
//       return 'teamleader';
//     }
//     else if (username !=='' && password !==''){
//       for(let i = 0 ; i<this.Data.length;i++){
//         if (username ===this.userdata[i].username && password === this.userdata[i].password ){
//           return 'teammember';
//         }
//       }
//       this.invalidCredentials = true;
//       return false;
//     }
//     else{
//       this.invalidCredentials = true;
//       return false;
//     }
//   }
//   onSubmit() {
//     const role = this.login(this.username, this.password);
//     if (role === 'teamleader') {
//       sessionStorage.setItem('currentuser', JSON.stringify(this.username));
//       sessionStorage.setItem('currentUserRole', JSON.stringify('teamleader'));
//       this.router.navigate(['/teamleader']);
//     } else if (role === 'teammember') {
//       sessionStorage.setItem('currentuser', JSON.stringify(this.username));
//       sessionStorage.setItem('currentUserRole', JSON.stringify('teammember'));
//       this.router.navigate(['/teammember']);
//     }
//   }
//   }
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})

export class LoginPageComponent{
  username='';
  password='';
  invalidCredentials = false;
  Data= JSON.parse(localStorage.getItem("values") || '{}');
  userdata = this.Data;
  showRegistrationSuccessMessage = false;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    const currentUser = sessionStorage.getItem('currentuser');
    if (currentUser) {
      const role = JSON.parse(sessionStorage.getItem('currentUserRole') || '{}');
      if (role === 'teamleader') {
        this.router.navigate(['/teamleader']);
      } else if (role === 'teammember') {
        this.router.navigate(['/teammember']);
      }
    }
    const registrationSuccess = sessionStorage.getItem('registrationSuccess');
    if (registrationSuccess === 'true') {
      this.showRegistrationSuccessMessage = true;
      sessionStorage.removeItem('registrationSuccess');
    }
  }

  login(username: string, password: string) {
    if (username !=='' && password !==''){
      for(let i = 0 ; i<this.Data.length;i++){
        if (username === 'admin' && username === this.userdata[i].username && password === this.userdata[i].password) {
          return 'teamleader';
        } else if (username === this.userdata[i].username && password === this.userdata[i].password ){
          return 'teammember';
        }
      }
      this.invalidCredentials = true;
      return false;
    } else {
      this.invalidCredentials = true;
      return false;
    }
  }
  
  onSubmit() {
    const role = this.login(this.username, this.password);
    if (role === 'teamleader') {
      sessionStorage.setItem('currentuser', JSON.stringify(this.username));
      sessionStorage.setItem('currentUserRole', JSON.stringify('teamleader'));
      this.router.navigate(['/teamleader']);
    } else if (role === 'teammember') {
      sessionStorage.setItem('currentuser', JSON.stringify(this.username));
      sessionStorage.setItem('currentUserRole', JSON.stringify('teammember'));
      this.router.navigate(['/teammember']);
    }
  }

}
