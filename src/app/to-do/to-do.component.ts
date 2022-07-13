import { Component, OnInit, ViewEncapsulation} from '@angular/core';
import { TasksService } from '../services/tasks.service';
import { Task } from '../models/task';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css'],
  //Enkapsulacja CSS
  encapsulation: ViewEncapsulation.Emulated//None
})
export class ToDoComponent implements OnInit {

  tasksList: Array<Task> = [];

  constructor(private tasksService: TasksService) { 

    this.tasksService.getTasksListObs().subscribe((tasks: Array<Task>) => { this.tasksList = tasks.slice(); });
  }

  ngOnInit(): void {
  }

  remove(task: Task): void{

    this.tasksService.remove(task);
  }

  done(task: Task): void{

    task.end = new Date();
    this.tasksService.done(task);
  }

  getColor(): string{

    return this.tasksList.length >= 5 ? 'red' : 'green';
  }
}
