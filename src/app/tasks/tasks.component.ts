import { Component } from '@angular/core';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {
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
  editNotesInput = undefined;
  id = JSON.parse(localStorage.getItem('taskdata') || '[]').length;
  
  constructor() {
    this.allData = JSON.parse(localStorage.getItem('values') || '{}');
    this.allTask = JSON.parse(localStorage.getItem('taskdata') || '{}');
  }
  
  onSubmit() {
    let taskData = [];
    let newTask = { data: { id: this.id, task: this.task, duedate: this.dueDate, assingnee: this.assingnee, note: this.note ,status:''} };
    if (localStorage.getItem('taskdata')) {
        taskData = JSON.parse(localStorage.getItem('taskdata') || '[]');
    }
    taskData.push(newTask);
    localStorage.setItem('taskdata', JSON.stringify(taskData));
    location.reload();
  }
  
  updateNotes(id: any) {
    this.editNotesInput = id;
  }
  
  editNotes(id: any) {
    this.allTask[id].data.note = this.updatedNote;
    localStorage.setItem('taskdata', JSON.stringify(this.allTask));
    this.editNotesInput = undefined;
    this.updatedNote = '';
  }
  updateTaskStatus(task: any) {
    localStorage.setItem('taskdata', JSON.stringify(this.allTask));
  }  
}