import { Injectable } from "@angular/core"
import { BehaviorSubject, Observable } from "rxjs";
import { Task } from "../models/task";

@Injectable()
export class TasksService{

  private tasksList: Array<Task> = [];
  private tasksDone: Array<Task> = [];

  private tasksListObs = new BehaviorSubject<Array<Task>>([]);
  private tasksDoneObs = new BehaviorSubject<Array<Task>>([]);

  add(task: Task){

    this.tasksList.push(task);
    this.tasksListObs.next(this.tasksList);
  }

  remove(task: Task){
    
    let index: number = this.tasksList.indexOf(task);
    this.tasksList.splice(index, 1)
    this.tasksListObs.next(this.tasksList);
  }

  done(task: Task){

    this.tasksDone.push(task);
    this.remove(task);
    this.tasksDoneObs.next(this.tasksDone);
  }

  constructor() {
    
    this.tasksList = [
      {name: 'Podlewanie kwiatów', created: new Date()},
      {name: 'Nauka Angulara', created: new Date()},
      {name: 'Sprzątanie', created: new Date()},
      {name: 'Zakupy', created: new Date()}
    ];
    this.tasksListObs.next(this.tasksList);

    this.tasksDone = [
      {name: 'Sprzątanie kuwety', created: new Date(), end: new Date()}
    ];
    this.tasksDoneObs.next(this.tasksDone);
  }

  getTasksListObs(): Observable<Array<Task>>{

    return this.tasksListObs.asObservable();
  }

  getTasksDoneObs(): Observable<Array<Task>>{

    return this.tasksDoneObs.asObservable();
  }
}