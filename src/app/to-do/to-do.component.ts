import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css'],
  //Enkapsulacja CSS
  encapsulation: ViewEncapsulation.Emulated,//None
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

  getColor(): string{

    return this.tasksList.length >= 5 ? 'red' : 'green';
  }
}
