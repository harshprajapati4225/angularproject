import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthguardService } from './authguard.service';
import { AuthguardformembersService} from './authguardformembers.service';

const routes: Routes = [
  {path:'',redirectTo: 'login', pathMatch: 'full'},
  {path:'login',loadChildren:()=>import('./login-page/login-page.module').then(m=>m.LoginPageModule)},
  { path: 'teammember', loadChildren:()=>import('./team-member/team-member.module').then(m=>m.TeamMemberModule),canActivate:[AuthguardService]},
  { path: 'teamleader', loadChildren:()=>import('./team-leader/team-leader.module').then(m=>m.TeamLeaderModule),canActivate:[AuthguardformembersService] },
  { path: 'tasks' , loadChildren:()=>import('./tasks/tasks.module').then(m=>m.TasksModule),canActivate:[AuthguardformembersService]},
  { path: 'register', loadChildren:()=>import('./register/register.module').then(m=>m.RegisterModule)},
  {path: 'editmembers', loadChildren:()=>import('./edit-members/edit-members.module').then(m=>m.EditMembersModule),canActivate:[AuthguardformembersService]},
  {path:'profile',loadChildren:()=>import('./profile/profile.module').then(m=>m.ProfileModule),canActivate:[]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
