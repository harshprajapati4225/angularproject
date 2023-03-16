import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksComponent } from './tasks.component';
import { RouterModule , Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppModule } from '../app.module';
const routes: Routes =[
  {path:'' , component:TasksComponent }
 ];
@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
  ]
})
export class TasksModule { }
