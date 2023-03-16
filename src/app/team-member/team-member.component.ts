import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-team-member',
  templateUrl: './team-member.component.html',
  styleUrls: ['./team-member.component.css']
})
export class TeamMemberComponent {
  allData: any;
  userData: any;
  assingnee: any;
  note: any;
  task: any;
  allTask: any;
  dueDate: any;
  taskData: any;
  taskName: any;
  updatedNote: any;
  editNotesInput = false;
  id = JSON.parse(localStorage.getItem('taskdata') || '[]').length;
  currentUser: any;
  constructor(private router: Router) {
    this.currentUser=JSON.parse(sessionStorage.getItem('currentuser')||'[]');
    this.allData = JSON.parse(localStorage.getItem('values') || '{}');
    this.allTask = JSON.parse(localStorage.getItem('taskdata') || '{}');
  }
  
  onSubmit() {
    let taskData = [];
    let newTask = { data: { id: this.id, task: this.task, duedate: this.dueDate, assingnee: this.assingnee, note: this.note , status:''} };
    if (localStorage.getItem('taskdata')) {
        taskData = JSON.parse(localStorage.getItem('taskdata') || '[]');
    }
    taskData.push(newTask);
    localStorage.setItem('taskdata', JSON.stringify(taskData));
    location.reload();
  }
  
  editNotes() {
    const index = this.allTask.findIndex((task: { id: number; }) => task.id === this.taskData);
    this.allTask[index].data.note = this.updatedNote;
    localStorage.setItem('taskdata', JSON.stringify(this.allTask));
    this.editNotesInput = false;
    this.updatedNote = '';
  }
  updateTaskStatus(data: any) {
    localStorage.setItem('taskdata', JSON.stringify(this.allTask));
  } 
  logout():void{
    sessionStorage.clear()
    this.router.navigate(['/login'])
  } 
}