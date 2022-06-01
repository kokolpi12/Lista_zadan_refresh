import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  tasksList: Array<string> = [];
  tasksDone: Array<string> = [];

  add(task: string): void{

    this.tasksList.push(task);
  }

  remove(task: string): void{
    
    let index: number = this.tasksList.indexOf(task);
    this.tasksList.splice(index, 1)
  }

  done(task: string): void{

    this.tasksDone.push(task);
    this.remove(task);
  }

  ngOnInit(): void {
    
    
  }
}

