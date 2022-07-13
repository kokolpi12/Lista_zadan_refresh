import { TasksService } from './services/tasks.service';
import { Component, OnInit } from '@angular/core';
import { Task } from './models/task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TasksService]
})

export class AppComponent implements OnInit{

  tasksList: Array<Task> = [];
  tasksDone: Array<Task> = [];

  add(task: Task): void{

    this.tasksList.push(task);
  }

  remove(task: Task): void{
    
    let index: number = this.tasksList.indexOf(task);
    this.tasksList.splice(index, 1)
  }

  done(task: Task): void{

    this.tasksDone.push(task);
    this.remove(task);
  }

  ngOnInit(): void {
    
    
  }
}

