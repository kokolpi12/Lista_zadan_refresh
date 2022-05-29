import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent implements OnInit {

  @Input()
  tasksList: string[] = [];

  @Output()
  emitDone = new EventEmitter<string>();
  @Output()
  emitRemove = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  remove(task: string): void{

    this.emitRemove.emit(task);
  }

  done(task: string): void{

    this.emitDone.emit(task);
  }

}
