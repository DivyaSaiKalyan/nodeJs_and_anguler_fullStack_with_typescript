import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { Tasks } from 'src/app/Tasks.types';
// import { TASKS } from 'src/app/mock-tasks';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  tasks: Tasks[] = [];
  constructor(private readonly taskService: TaskService) {}

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks) => {
      this.tasks = tasks;
    });
  }

  deleteTask(task: any) {
    this.taskService.deleteTask(task).subscribe(() => {
      this.tasks = this.tasks.filter((t) => t.id !== task.id);
    });
  }
  toggleTask(task: any) {
    task.reminder = !task.reminder;
    this.taskService.toggleUpdate(task).subscribe();
  }

  addTask(newTask: Tasks) {
    this.taskService
      .addNewTask(newTask)
      .subscribe((task) => this.tasks.push(task));
  }
}
