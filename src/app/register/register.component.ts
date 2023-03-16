import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  username = '';
  password = '';
  address = '';
  technologies:any;
  phone = '';
  email = '';
  gender = '';
  profilePic='';
  terms= false;
  noMatchFound = false;
  registrationSuccess = false;
  checkboxValues = [
    { value: 'REACT JS', checked: false },
    { value: 'PHP', checked: false },
    { value: 'JAVA', checked: false }
  ];
  id = JSON.parse(localStorage.getItem('values')|| '[]').length;
  allValues = JSON.parse(localStorage.getItem('values')||"[]");

  // add properties for tracking field validity
  validUsername = true;
  validPassword = true;
  validPhone = true;
  validEmail = true;
  validTech = true;
  validAddress = true;
  validTerm= true;

  constructor(private router: Router) {}

  onSubmit() {
    if (this.username==''){
       this.validUsername = false;
    }
    else if(this.password==''){
      this.validPassword = false;
    }
    else if(this.address==''){
      this.validAddress = false;
    }
    else if(this.phone==''){
      this.validPhone = false;
    }
    else if (this.email==''){
      this.validEmail = false;
    }
    else if (this.terms == false){
      this.validTerm = false;
    }
    else{
      let isUsernameUnique = true;
      for (let i = 0; i < this.allValues.length; i++) {
        if (this.username === this.allValues[i].username) {
          isUsernameUnique = false;
          alert('duplicate username found');
          break;
        }
      }
      if (isUsernameUnique) {
        let newValues = { id: this.id, profile_pic:this.profilePic , username: this.username, password: this.password , address:this.address ,phone_no:this.phone,email:this.email,techlonologies:this.technologies,gender:this.gender };
        let values = [];
        if (localStorage.getItem('values')) {
          values = JSON.parse(localStorage.getItem('values') || '{}');
        }
        values.push(newValues);
        this.registrationSuccess = true;
        localStorage.setItem('values', JSON.stringify(values));
        this.router.navigate(['/login']);
        sessionStorage.setItem('registrationSuccess', JSON.stringify(this.registrationSuccess));
        alert('Registration successful. Please go back to login.');
      }
    }
  }
  getSelectedValues() {
    this.technologies= this.checkboxValues.filter(checkbox => checkbox.checked).map(checkbox => checkbox.value);
  }
}
