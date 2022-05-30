import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Tasks } from '../../Tasks.types';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
})
export class AddTaskComponent implements OnInit {
  text: string = '';
  day: string = '';
  reminder: boolean = false;
  showAddTask: boolean = false;
  private subscription: Subscription;

  @Output() onAddTask: EventEmitter<Tasks> = new EventEmitter();

  constructor(private readonly uiService: UiService) {
    this.subscription = this.uiService.onToggle().subscribe((value) => {
      this.showAddTask = value;
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    if (!this.text) {
      alert('please add taxt');
    } else {
      const newTask = {
        text: this.text,
        day: this.day,
        reminder: this.reminder,
      };
      this.onAddTask.emit(newTask);
      console.log(newTask);
      this.text = '';
      this.day = '';
      this.reminder = false;
    }
  }
}
