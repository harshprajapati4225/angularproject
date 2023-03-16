import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from '@angular/router';
import { EditMembersComponent } from './edit-members.component';

const routes : Routes = [
  {path:'',component:EditMembersComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class EditMembersModule { }
