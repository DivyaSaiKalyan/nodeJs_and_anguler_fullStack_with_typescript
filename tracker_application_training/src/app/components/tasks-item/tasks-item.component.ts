import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Tasks } from '../../Tasks.types';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-tasks-item',
  templateUrl: './tasks-item.component.html',
  styleUrls: ['./tasks-item.component.css'],
})
export class TasksItemComponent implements OnInit {
  @Input() task!: Tasks;
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter();
  @Output() onToggleReminder: EventEmitter<Task> = new EventEmitter();

  faTimes = faTimes;

  constructor() {}

  ngOnInit(): void {}

  onDelete(task: any) {
    console.log(task);
    return this.onDeleteTask.emit(task);
  }
  onToggle(task: any) {
    console.log('toggle');
    this.onToggleReminder.emit(task);
  }
}
