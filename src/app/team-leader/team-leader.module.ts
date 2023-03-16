import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from '@angular/router';
import { TeamLeaderComponent } from './team-leader.component';
import { TeamleaderHeaderComponent } from '../teamleader-header/teamleader-header.component';
import { TeamleaderHeaderModule } from '../teamleader-header/teamleader-header.module';

const routes: Routes =[
  {path:'' , component:TeamLeaderComponent }
 ];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  
  ],
})
export class TeamLeaderModule { }
