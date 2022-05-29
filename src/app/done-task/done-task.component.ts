import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-done-task',
  templateUrl: './done-task.component.html',
  styleUrls: ['./done-task.component.css']
})
export class DoneTaskComponent implements OnInit {

  
  @Input()
  tasksDone: Array<string> = [];
  
  constructor() { }

  ngOnInit(): void {
  }
}
