import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { FormsModule } from '@angular/forms';
import { TeamMemberComponent } from './team-member/team-member.component';
import { TeamLeaderComponent } from './team-leader/team-leader.component';
import { EditMembersComponent } from './edit-members/edit-members.component';
import { TeamleaderHeaderComponent } from './teamleader-header/teamleader-header.component';
import { TasksComponent } from './tasks/tasks.component';
import { ProfileComponent } from './profile/profile.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    TeamMemberComponent,
    TeamLeaderComponent,
    EditMembersComponent,
    TeamleaderHeaderComponent,
    TasksComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  exports:[TeamLeaderComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {

 }
