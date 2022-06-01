import { Component, OnInit, ViewEncapsulation} from '@angular/core';
import { TasksService } from '../services/tasks.service';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css'],
  //Enkapsulacja CSS
  encapsulation: ViewEncapsulation.Emulated,//None
})
export class ToDoComponent implements OnInit {

  tasksList: string[] = [];

  constructor(private tasksService: TasksService) { 

    this.tasksService.getTasksListObs().subscribe((tasks: Array<string>) => { this.tasksList = tasks });
  }

  ngOnInit(): void {
  }

  remove(task: string): void{

    this.tasksService.remove(task);
  }

  done(task: string): void{

    this.tasksService.done(task);
  }

  getColor(): string{

    return this.tasksList.length >= 5 ? 'red' : 'green';
  }
}
