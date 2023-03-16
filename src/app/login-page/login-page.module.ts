import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule , Routes } from '@angular/router';
import { LoginPageComponent } from './login-page.component';
import { FormsModule } from '@angular/forms';

const routes: Routes =[
  {path:'' , component:LoginPageComponent }
 ];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule
  ]
})
export class LoginPageModule {

 }
