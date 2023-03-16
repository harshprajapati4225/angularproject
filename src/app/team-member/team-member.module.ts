import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamMemberComponent } from './team-member.component';
import { RouterModule , Routes } from '@angular/router';

const routes: Routes =[
  {path:'' , component:TeamMemberComponent }
 ];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class TeamMemberModule { }
