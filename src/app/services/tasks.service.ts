import { Injectable } from "@angular/core"
import { BehaviorSubject, Observable } from "rxjs";

@Injectable()
export class TasksService{

  private tasksList: Array<string> = [];
  private tasksDone: Array<string> = [];

  private tasksListObs = new BehaviorSubject<Array<string>>(this.tasksList);
  private tasksDoneObs = new BehaviorSubject<Array<string>>(this.tasksDone);

  add(task: string){

    this.tasksList.push(task);
    this.tasksListObs.next(this.tasksList);
  }

  remove(task: string){
    
    let index: number = this.tasksList.indexOf(task);
    this.tasksList.splice(index, 1)
    this.tasksListObs.next(this.tasksList);
  }

  done(task: string){

    this.tasksDone.push(task);
    this.remove(task);
    this.tasksDoneObs.next(this.tasksDone);
  }

  constructor() {
    
    this.tasksList = ['Podlewanie kwiatów','Nauka Angulara','Sprzątanie','Zakupy'];
    this.tasksListObs.next(this.tasksList);
  }

  getTasksListObs(): Observable<Array<string>>{

    return this.tasksListObs.asObservable();
  }

  getTasksDoneObs(): Observable<Array<string>>{

    return this.tasksDoneObs.asObservable();
  }
}